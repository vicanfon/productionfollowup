var dal = require('../DAL');

module.exports = {
  get: function (req, res) {
    //get project by id
    if(req.query.id && req.query.company) {
      dal.machines.get(req.query.id, req.query.company, function (err, answer) {
        if (!err) {
          res.status(200).send(answer);
        } else {
          res.status(500).end();
        }
      })
    }else if(req.query.company) {
      dal.machines.get(req.query.company, function (err, answer) {
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
    //body: {name,description}
    if (req.body.id && req.body.name && req.body.performance && req.body.quality && req.body.availability && req.body.oee && req.body.company) {
      dal.machines.create(req.body.id, req.body.name,req.body.performance, req.body.quality, req.body.availability, req.body.oee, req.body.company, function (err, answer) {
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
  update: function (req, res) {
    // console.log("BODY", req.body)
    if (req.query.id && req.body.name && req.body.performance && req.body.quality && req.body.availability && req.body.oee && req.body.company) {
      dal.machines.update(req.query.id, req.body.name, req.body.performance, req.body.quality, req.body.availability, req.body.oee, req.body.company, function (err, answer) {
        if (!err) {
          res.status(200).send(answer);
        } else {
          res.status(500).end();
        }
      })
    } else {
      res.status(422).json({ message: "Missing required field" })
    }
  },
  delete: function (req, res) {
    if (req.query.id && req.query.company) {
      dal.machines.delete(req.query.id, req.query.company,  function (err, answer) {
        if (!err) {
          res.status(200).send(answer);
        } else {
          res.status(500).end();
        }
      })
    } else {
      res.status(422).json({ message: "Missing required field" })
    }
  }
}
