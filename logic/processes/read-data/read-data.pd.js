let sdk = require('../../../bin/libs/vfos-sdk/sdk-include');
var express = require('express');
var router = express.Router();
var request = require('request');


let vfosMessagingPubsub = sdk.messaging;
var broker = sdk.config.MESSAGING_PUBSUB.SERVER_URL;
var userName = "archiver1";
var domain = "pt.vfos";
var routingKeys = ["pt.vfos.drivers.#"];

/**
 * 
 *  begging of section to archive messaging from a topic
 */
var communications = new vfosMessagingPubsub(broker, userName, domain, routingKeys);
// communications.unregister();
var Topic = "pt.vfos.drivers";
let listOfGettingMessages = [];



function messageHandler(msg) {
	topic = msg.routingKey;
	// pt.vfos.drivers.opc_ua.d1.s1
	// console.log('topic ', topic);
		      	  console.log("***msg*** "+JSON.stringify(msg.routingKey));
	  if (topic.startsWith("pt.vfos.drivers") && (topic.includes("performance") || topic.includes("quality") || topic.includes("availability") || topic.includes("oee"))){
	          	  console.log("***new measure***");

	message = JSON.parse(msg.content);
	/*
	 * 
	 message._did
	 message._sid
	 message.data  176-2
	 message.units
	 message.timestamp
	 message.status
	 */
	/*
	 timestamp: message.timestamp
     status: "Detected"
     code: "1"
     type: "1"
     machine: "message._did"
     company: "sis"
     origin: "automatic"
	 */
	// console.log("> messageHandler: msg.content = \"" + msg.content.toString() + "\"");
	
	    let options = {
    url: 'http://reverse-proxy/vfrelstorage/vfos/rel/1.0.5/databases/productionfollowup/tables/measures/rows',
    method: 'post',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Basic cG9zdGdyZXM6dmZvcw=="

    },
    body: JSON.stringify([{
	 timestamp: new Date(message.timestamp).toUTCString(),
     data: message.data,
     idmachine: message._did,
     company: "sis",
     type: message._sid}])
  }
  
  request(options, function (err, answer) {
      //console.log("answer:"+JSON.stringify(answer));
  });
  // read measure
  
	    let optionsR = {
    url: 'http://reverse-proxy/vfrelstorage/vfos/rel/1.0.5/databases/productionfollowup/tables/machines/rows?filter=id=\''+message._did+'\' and company=\'sis\'',
    method: 'get',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Basic cG9zdGdyZXM6dmZvcw=="

    }
  }
  
  request(optionsR, function (err, answer) {
      let body= JSON.parse(answer.body)
      console.log("limits**:"+JSON.stringify(body.list_of_rows[0]));
      let limits = body.list_of_rows[0];
      console.log("row**:"+JSON.stringify(limits));
      if (limits[message._sid] < message.data){
          console.log("*new warning");
          let optionsW = {
    url: 'http://reverse-proxy/vfrelstorage/vfos/rel/1.0.5/databases/productionfollowup/tables/warnings/rows',
    method: 'post',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Basic cG9zdGdyZXM6dmZvcw=="

    },
    body: JSON.stringify([{
	 timestamp: message.timestamp,
     value: message.data,
     idmachine: message._did,
     company: "sis",
     indicator: message._sid}])
  }
  
  request(optionsW, function (err, answer) {
      //console.log("answer:"+JSON.stringify(answer));
  });
          }
  });
  // store in warning if overcome
 }
}

communications.registerPublicationReceiver(messageHandler);
/**
 * end of archive section
 */


module.exports = (app) => router;
