/* eslint-disable func-names */

const storage = require("./storageRequester");

module.exports = {
    getByCompany: function (idmachine, company, initdate, enddate, cb) {
        console.log("dateinit:"+initdate+" dateend:"+enddate);
        storage('GET', "/tables/measuresbyCompany/rows?filter=idmachine='"+idmachine+"' and company='" + company+ "'and timestamp BETWEEN '"+initdate+"' and '"+enddate+"'&order_by=timestamp", {}, function (error, response, body) {
            console.log("response:"+JSON.stringify(response));
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
    create: function (performance, quality, availability, oee, timestamp, company, idmachine, cb) {
        let data = [{
            performance: performance,
            quality: quality,
            availability: availability,
            oee: oee,
            timestamp: timestamp,
            company: company,
            idmachine: idmachine
        }];
        storage('POST', "/tables/measures/rows", data, function (error, response, body) {
            console.log("response:"+JSON.stringify(response));
            if (!error) {
                cb(false, { message: "Measure is created" })
            } else {
                cb(true, "Relational Storage Component not responding");
            }
        })
    }
};
