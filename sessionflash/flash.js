function flashDataToSession(req, data, action){
    req.session.inputData =  data
    req.session.save(action)
}
module.exports = flashDataToSession