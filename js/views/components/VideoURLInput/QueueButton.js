var m = require("mithril");

var VideoURLInput = require("./VideoURLInput");
var VideoQueue = require("./../MainVideoContent/VideoQueue");
var TextBox = require("./Textbox");


var title="";
var targ=TextBox;
let QueueButton = {
    setTitle: (value) =>{
        title = value;
    },
    setTarg: (value) =>{
        targ = value;
    },
    view: (vnode) =>{
    
        /* Create an input field of type button */
        return m("input[type=button]", {
            
            /* Button Text */
            value:"Queue!",
            onclick: (e) => {
                //console.log("queueueueueueue was clicked");
                VideoQueue.enqueue(title, "Queued by: Username");
                if(targ!=null){
                    console.log(targ+"\n"+targ.value);
                    
                    TextBox.clear(targ);
                }
            },
            /*
                onKeyPress ---- Keycode == 13
            */
           

        });
    
    }
}
module.exports = QueueButton;