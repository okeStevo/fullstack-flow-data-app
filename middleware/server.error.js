function serversideError(error, req, res, next) {
  res.status(500).render("500");
  console.log(error)
  return
}
module.exports = serversideError;
