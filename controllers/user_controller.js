// 获取用户
exports.getUser = async (ctx, next) => {
  ctx.body = {
    username: '阿，老爸',
    age: 55,
  };
};

// 用户注册

exports.registerUser = async (ctx, next) => {
  console.log('registerUser', ctx.request.body);
};

exports.queryUsers = function () {
  return new Promise((reslove, reject) => {
    const mongoose = require('mongoose');
    mongoose.connect(
      'mongodb://admin:123456@47.100.224.4:27017/info?authSource=admin'
    );

    var kittySchema = mongoose.Schema({
      name: String,
      age: String,
    });

    var infoModel = mongoose.model('info', kittySchema);
    infoModel.find().exec((err, docs) => {
      reslove(docs);
    });
  });
};
