#!/usr/bin/env node
const vfosMessagingPubsub = require("../index.js");

var broker = "amqp://jijfhlcy:3CUlVZBTehPKPQxfz8Jz3EEMQSa8D5UX@puma.rmq.cloudamqp.com/jijfhlcy";
var userName = "archiver1";
var domain = "pt.vfos";
var routingKeys = ["#"];

var communications = new vfosMessagingPubsub(broker, userName, domain, routingKeys);

function messageHandler(msg) {
  topic = msg.routingKey;

  switch (msg.content.toString()) {
    case "trigger":
      console.log("> messageHandler: TRIGGER SPECIAL MESSAGE");
    break;
    default:
      console.log("> messageHandler: msg.content = \"" + msg.content.toString() + "\"");
    break;
  }
}

communications.sendPublication(domain+".critical", "trigger");
communications.registerPublicationReceiver(messageHandler);
communications.registerPrivateMessageReceiver(messageHandler);
