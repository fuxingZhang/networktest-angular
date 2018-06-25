module.exports = {
  s3: {  // aws-sdk  platform ali
    accessKeyId:'',
    accessKey:'',
    endpoint:'aliyuncs.com',   // endpoint:'aliyuncs.com',
    region:'',
    platform:'ali',  //ali
    bucket:'networktest'
  },
  // s3: {  //aws-sdk 内网 xsky
  //   accessKeyId: "", 
  //   accessKey: "", 
  //   endpoint: "",  // 一定要加http,s3 browser一定不能加http://
  //   region: "us-west-2",
  //   platform: "",  // ali
  //   bucket: "networktest"
  // },
  ali: {     //  ali-sdk  upload和ali-oss兼容不好
    accessKeyId: "",
    accessKey: "",
    region: "",
    bucket: "networktest"
  },
  mode:'file',   // file, ali-sdk, aws-sdk
}