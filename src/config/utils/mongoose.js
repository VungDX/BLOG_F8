module.exports = {
  // Khi trả về list --> lỗi của handlebars
  multipleMongooseToObject: function (mongooses) {
    return mongooses.map((mongoose) => mongoose.toObject());
  },

  // Khi trả về object
  singleMongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
