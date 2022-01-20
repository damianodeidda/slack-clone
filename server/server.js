//jshint esversion:6

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express();


app.use(bodyParser.json());
app.use(cors());


//Creazione del database
mongoose.connect(process.env.DB_CONNECTION);

//Schema di un messaggio singolo
const messagesSchema = new mongoose.Schema ({
    messageUser: String,
    messageText: String,

})

//Modello di un messaggio singolo
const Message = mongoose.model('Message', messagesSchema);



//Schema di un canale singolo (con all'interno l'array dei messaggi singoli)
const channelSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },

    messages: [messagesSchema]
})

// Modello del canale singolo
const Channel = mongoose.model('Channel', channelSchema);



//Get request con Json File per vedere tutti gli elementi del database

app.get("/", (req,res) => {

    Channel.find({}, (err, result) => {

            if (err ){
                res.json(err)
            } else {
       res.json(result)
            }
    })
})



//Get request per vedere il singolo canale (con i relativi messaggi)

app.get("/channel/:channelName", async (req,res) => {
    try {
   const channel = await Channel.findOne({name: (req.params.channelName)})
   
   res.json(channel)
    } catch(err) {
        res.json({message: err})
    }
})



// Post request per la creazione di un nuovo canale

app.post("/newChannel", async (req,res) => {

    let channelName = (req.body);

    const newChannel = new Channel (channelName);

    await newChannel.save();

//Al momento della creazione del canale viene inserito un secondo modello del database (Messaggi)
    const messageName = (req.body);
    const newMessage = new Message(messageName);  

    res.json(channelName);
    
});



// Put request per un singolo messaggio all'interno di un canale

app.put("/newMessage/:name", async (req, res) => {


    // Viene ricercato prima il canale, e se esistente, viene inserito il messaggio
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



// Eliminazione di un canale (e di tutti i messaggi all'interno)

app.delete("/deleteChannel/:name", (req, res) => {


const deleteChannelid = req.params.name;

const deletedChannel = Channel.findOneAndRemove({name: deleteChannelid}, (err,result) => {

    if (!err){
        console.log("channel deleted")
        res.json(result)
    } else {

        console.log("error")
    }
})


})




app.listen(process.env.PORT || "3001", (req, res) => {

    console.log("Server running on port 3001");


})