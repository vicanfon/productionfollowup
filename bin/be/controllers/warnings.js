var dal = require('../DAL');

module.exports = {
  get: function (req, res) {

      if (req.query.company) {
        //get all projects by project
        dal.warnings.getByCompany(req.query.company, function (err, answer) {
          if (!err) {
            res.status(200).send(answer);
          } else {
            res.status(500).end();
          }
        })
      }else{
        res.status(422).json({ message: "Missing required fields" })
          }
  },
  create: function (req, res) {
    if (req.body.timestamp && req.body.indicator && req.body.value && req.body.company && req.body.idmachine) {
      dal.warnings.create(req.body.timestamp, req.body.indicator, req.body.value, req.body.company, req.body.idmachine, function (err, answer) {
        if (!err) {
          res.status(201).json(answer);
        } else {
          res.status(500).end();
        }
      })
    } else {
      res.status(422).json({ message: "Missing required fields" })
    }
  }
}
