//jshint esversion:6

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();


app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/slackDB');


const messagesSchema = new mongoose.Schema ({
    messageUser: String,
    messageText: String,

})


const Message = mongoose.model('Message', messagesSchema);

const channelSchema = new mongoose.Schema ({
    name: String,
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

app.post("/newChannel", async (req,res) => {

    const channelName = (req.body);
    const newChannel = new Channel (channelName);
    await newChannel.save();

    const messageName = (req.body);
    const newMessage = new Message(messageName);
    await newMessage.save(channelName);

    res.json(channelName);


})



app.listen("3001", (req, res) => {

    console.log("Server running on port 3001");


})