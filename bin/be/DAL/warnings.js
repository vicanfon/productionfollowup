/* eslint-disable func-names */

const storage = require("./storageRequester");

module.exports = {
  getByCompany: function (company, cb) {
    storage('GET', "/tables/warningsbyCompany/rows?filter=company=" + "'" + company+ "'", {}, function (error, response, body) {
      if (!error) {
        if (response.statusCode == 200) {
          json = JSON.parse(response.body);
          cb(false, json.list_of_rows);
        } else {
          json = JSON.parse(response.body);
          cb(false, json.message);
        }
      } else {
        cb(true, "Relational Storage Component not responding");
      }
    })
  },
  create: function (timestamp, indicator, value, company, idMachine, cb) {
    let data = [{
      timestamp: timestamp,
      indicator: indicator,
      value: value,
      company: company,
      idMachine: idMachine
    }];

    storage('POST', "/tables/warnings/rows", data, function (error, response, body) {
      console.log("response:"+JSON.stringify(response));
      if (!error) {
        cb(false, { message: "Alarm is created" })
      } else {
        cb(true, "Relational Storage Component not responding");
      }
    })
  },
  delete: function(id, cb){
    storage('DELETE', "/tables/warnings/rows?filter=id='" + id + "'", {}, function(error, response, body){
      if(!error){
        cb(false, {message: "Alarm is deleted"})
      }else{
        cb(true, "Relational Storage Component not responding");
      }
    })
  }
};
