const OSS = require('ali-oss');
const config = require('../config').ali;

const client = new OSS.Wrapper({
  accessKeyId: config.accessKeyId,
  accessKeySecret: config.accessKey,
  bucket: config.bucket,
  region: config.region,
  //timeout: 6000    // ms
});

module.exports = client