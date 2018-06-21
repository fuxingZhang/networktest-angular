/**
 * Created by zfx on 4/12/2018
 */
const AWS = require('aws-sdk');
const S3 = require('aws-sdk/clients/s3');
const config = require('../config').s3;

const _config = {
  accessKeyId: config.accessKeyId,
  secretAccessKey: config.accessKey,
  region: config.region,    // region可以忽略不计,是前端下拉框选择的
};
if(config.endpoint) {   // 内网或外网 xsky huawei ali
  if (config.platform === "ali") {
    _config.endpoint = `${config.region}.${config.endpoint}`;
  }else{
    _config.endpoint = config.endpoint;
    //whether to force path style URLs for S3 objects, xsky要加,阿里oss加了就找不到
    _config.s3ForcePathStyle = true; 
  }
}

const s3 = new S3(_config);

module.exports = s3