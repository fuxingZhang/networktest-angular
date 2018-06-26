const Router = require('koa-router')
const fs = require('fs')
const _fs = require('../utils/fs')
const Busboy = require('busboy');
const inspect = require('util').inspect;
const router = new Router({
  prefix: '/api'
})
const config = require('../config');
const mode = config.mode;
let s3 = null;
let oss = null;

router
  .get('/latency', async ctx => {
    ctx.body = {
      status: 'success'
    }
  })
  .get('/download', async ctx => {
    if (mode == 'aws-sdk') {
      if(!s3) {
        s3 = require('../s3');
      }
      let request = s3.getObject({
        Bucket: config.s3.bucket,
        Key: '100mb_file.bin'
      })
      try {
        ctx.body = request.on('httpDownloadProgress', (progress, response) => {
          let loaded = progress.loaded
          let total = progress.total
          console.log(total);
          console.log((loaded*100/total).toFixed(2) + '%')
        }).createReadStream()
      } catch (e) {
        console.log(e)
        request.abort.bind(request)
      }
    } else if (mode == 'ali-sdk') {
      if(!oss) {
        oss = require('../ali-oss');
      }
      let res = await oss.getStream('100mb_file.bin', {
        timeout: 60 * 60 * 1000,   // ms
      })
      ctx.body = res.stream
    } else {
      ctx.body = fs.createReadStream('./testFiles/10mb_file.bin')
    }
  })
  .get('/upload', async ctx => {
    ctx.body = fs.createReadStream('./testFiles/1kb_file.bin')
  })
  .post('/upload', async ctx => {
    ctx.body = await new Promise((resolve, reject) => {
      let busboy = new Busboy({ headers: ctx.headers });
      busboy.on('file', async (fieldname, file, filename, encoding, mimetype) => {
        if (mode == 'aws-sdk') {
          if(!s3) {
            s3 = require('../s3');
          }
          let request = s3.upload({
            Bucket: config.s3.bucket,
            Key: filename,
            Body: file,
          })
          try {
            let res = await request.on('httpUploadProgress', (progress, response) => {
              let loaded = progress.loaded
              let total = progress.total
              console.log(total);
              console.log((loaded*100/total).toFixed(2) + '%')
            }).promise()
            console.log(res)
          } catch (e) {
            console.log(e)
            request.abort.bind(request)
          }
        } else if (mode == 'ali-sdk') {
          if(!oss) {
            oss = require('../ali-oss');
          }
          let res = await oss.putStream(filename, file, {
            timeout: 60 * 60 * 1000,   // ms
          })
          console.log(res)
        } else {
          file.pipe(fs.createWriteStream('./uploads/' + filename))
        }
        console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
        file.on('data', data => {
          // console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
        });
        file.on('end', () => {
          console.log('File [' + fieldname + '] Finished');
        });
      });
      busboy.on('field', (fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) => {
        console.log('Field [' + fieldname + ']: value: ' + inspect(val));
      });
      busboy.on('finish', () => {
        console.log('busboy finished!');
        resolve('finished')
      });
      busboy.on('error', err => {
        console.log('error!', err);
        reject(err)
      });
      ctx.req.pipe(busboy);
    })
  })

module.exports = router