function dataGetRoutes(req, res) {
  let inputData = req.session.dateError;
  if (!inputData) {
    inputData = {
      hasError: false,
      errMessage: "",
    };
  }
  req.session.dateError = null;
  res.render("base/data", { inputData: inputData });
}

function monitorGetRoutes(req, res) {
res.render("incompletePage") 
  // res.render("base/monitor");
}
function confirmGetRoutes(req, res) {
  res.render("base/confirm");
}
function inndexRoutes(req, res) {
  res.render("base/index");
}

module.exports = {
  dataGetRoutes: dataGetRoutes,
  monitorGetRoutes: monitorGetRoutes,
  confirmGetRoutes: confirmGetRoutes,
  inndexRoutes:inndexRoutes
};
