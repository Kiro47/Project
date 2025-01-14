var m = require ("mithril");
var Firebase = require("firebase/app");
require("firebase/firestore");

var RoomState = require("../../../models/RoomState");

var ChatUser = require("./ChatUser");


var ChatList = {
    view: (vnode) => {
        return m("div", {class: "chatboxmessage"}, Object.keys(RoomState.users).map((i) => {
            return m(ChatUser, {user: RoomState.users[i]});
        }));
    }
}

module.exports = ChatList;