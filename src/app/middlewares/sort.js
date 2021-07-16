module.exports = function sort(req, res, next) {
  res.locals._sort = {
    enabled: false,
    type: "default",
  };
  if (req.query.hasOwnProperty("_sort")) {
    // res.locals._sort.enabled = true;
    // res.locals._sort.type = req.query.type;
    // res.locals._sort.column = req.query.column;
    // assign hợp nhất hai object, nếu trùng key thì ghi đè lại
    Object.assign(res.locals._sort, {
      enabled: true,
      type: req.query.type,
      column: req.query.column,
    });
  }
  next();
};
