/* eslint-disable func-names */

const storage = require("./storageRequester");

module.exports = {
    get: function (company, cb) {
        storage('GET', "/tables/machines/rows?filter=company='" +company+"'", {}, function (error, response, body) {
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
    getbyId: function (id, company, cb) {
        storage('GET', "/tables/machines/rows?filter=id='"+id+"' and company='" +company+"'", {}, function (error, response, body) {
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
    create: function (id, name, performance, quality, availability, oee, company, cb) {
        let data = [{
            id: id,
            name: name,
            performance: performance,
            quality: quality,
            availability: availability,
            oee: oee,
            company: company
        }];
        console.log("data:"+JSON.stringify(data));
        storage('POST', "/tables/machines/rows", data, function (error, response, body) {
            console.log("responsemachine: "+JSON.stringify(response));
            if (!error) {
                cb(false, { message: "Machine is created" })
            } else {
                cb(true, "Relational Storage Component not responding");
            }
        })
    },
    update: function (id, name, performance, quality, availability, oee, company, cb) {
        let data = {
            name: name,
            performance: performance,
            quality: quality,
            availability: availability,
            oee: oee
        };
        storage('PATCH', "/tables/machines/rows?filter=id='" + id +"' and company='"+company+"'", data, function (error, response, body) {
            console.log("message:"+JSON.stringify(response));
            if (!error) {
                cb(false, { message: "Machine is updated" })
            } else {
                cb(true, "Relational Storage Component not responding");
            }
        })
    },
    delete: function(id, company, cb){
        storage('DELETE', "/tables/machines/rows?filter=id='" + id +"' and company='"+company+"'", {}, function(error, response, body){
            console.log("message:"+JSON.stringify(response));
            if(!error){
                cb(false, {message: "Machine is deleted"})
            }else{
                cb(true, "Relational Storage Component not responding");
            }
        })
    }
};
