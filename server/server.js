//jshint esversion:6

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();


app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/slackDB');


const messagesSchema = new mongoose.Schema ({
    messageUser: String,
    messageText: String,

})


const Message = mongoose.model('Message', messagesSchema);

const channelSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },

    messages: [messagesSchema]
})

const Channel = mongoose.model('Channel', channelSchema);

app.get("/", (req,res) => {

    Channel.find({}, (err, result) => {

            if (err ){
                res.json(err)
            } else {
       res.json(result)
            }
    })
})




app.get("/channel/:channelName", async (req,res) => {
   
   
    try {
   const channel = await Channel.findOne({name: (req.params.channelName)})
   
   res.json(channel)
    } catch(err) {
        res.json({message: err})

    }

})

app.post("/newChannel", async (req,res) => {

    let channelName = (req.body);

    const newChannel = new Channel (channelName);
    await newChannel.save();


    const messageName = (req.body);
    const newMessage = new Message(messageName);  

   

res.json(channelName);
    
});


app.put("/newMessage/:name", async (req, res) => {

const newMessage = Channel.findOne({name : req.params.name}, (err, result) => {
    
    if (!err) {
        if (!result){
        res.status(404).send('channel was not found');
        }
        else {
        
            result.messages.push(req.body);
            result.markModified('messages');
            result.save((saveErr, saveRes) => {
                if (!saveErr) {
                    res.status(200).send(saveRes);
                } else {
                    res.status(400).send(saveErr.message);
                }
            })
        }

    } else {

        res.status(400).send(err.message);
    }

    
    
})

})



app.listen("3001", (req, res) => {

    console.log("Server running on port 3001");


})