var dal = require('../DAL');

module.exports = {
  get: function (req, res) {
    if (req.query.mail) {
      //get project by id
      dal.users.validate(req.query.mail, function (err, answer) {
        if (!err) {
          res.status(200).send(answer);
        } else {
          res.status(500).end();
        }
      })

    } else {
      dal.users.get(function (err, answer) {
        if (!err) {
          res.status(200).send(answer);
        } else {
          res.status(500).end();
        }
      })
    }
  },
  create: function (req, res) {
    if (req.body.mail && req.body.name && req.body.role && req.body.company && req.body.password) {
      dal.users.create(req.body.mail, req.body.name, req.body.role, req.body.company, req.body.password, function (err, answer) {
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
    if (req.query.mail && req.body.name && req.body.role && req.body.company && req.body.password) {
      dal.users.update(req.query.mail, req.body.name, req.body.role, req.body.company, req.body.password, function (err, answer) {
        if (!err) {
          res.status(200).send(answer);
        } else {
          res.status(500).end();
        }
      })
    }else {
      res.status(422).json({ message: "Missing required fields" })
    }
  },
  delete: function (req, res) {
    if (req.query.mail) {
      dal.users.delete(req.query.mail, function (err, answer) {
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
