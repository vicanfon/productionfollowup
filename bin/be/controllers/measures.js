var dal = require('../DAL');

module.exports = {
  get: function (req, res) {
    if(req.query.idmachine && req.query.company && req.query.initdate && req.query.enddate){
          dal.measures.getByCompany(req.query.idmachine, req.query.company, req.query.initdate, req.query.enddate, function (err, answer) {
            if (!err) {
              res.status(200).send(answer);
            } else {
              res.status(500).end();
            }
          })
        }else{
      res.status(422).json({ message: "Missing required fields" })
        }
    //res.status(201).json({awesome: "working"})
  },
  create: function (req, res) {
    //body: {name,description}
    if (req.body.performance && req.body.quality && req.body.availability && req.body.oee && req.body.timestamp && req.body.company && req.body.idmachine) {
      dal.measures.create(req.body.performance, req.body.quality, req.body.availability, req.body.oee, req.body.timestamp, req.body.company, req.body.idmachine,function (err, answer) {
        if (!err) {
          res.status(201).json(answer);
        } else {
          res.status(500).end();
        }
      })
    } else {
      res.status(422).json({ message: "Missing required fields" })
    }
  },
}
