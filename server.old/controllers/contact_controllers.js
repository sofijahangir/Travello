
const Contact = require("../models/contact");

exports.send_contact_message = async(req,res)=>{
    try {
        if(!req.body.email)
        {
            throw new Error("Email");
        }
        else if(!req.body.message)
        {
            throw new Error("Message");
        }
        const new_message = await new Contact(req.body);
        new_message.save();
        res.status(200).send("Message Sent We Will Contact You Soon");
    } catch (error) {
       if(error.message=="Email")
       {
           res.status(409).send("Email Required To Send Message")
       }
       else if(error.message=="Message")
       {
           res.status(409).send("Message Field Required To Send Message")
       }
       else
       {
           res.status(400).send(error.message)
       }
    }
}


exports.get_contact_messages = async(req,res)=>{
    try {
        const messages = await Contact.find({});
        if(messages.length < 1)
        {
            res.status(404).send("No Messages Yet");
        }
        else
        {
            res.send(messages);
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}