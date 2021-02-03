const express = require("express");
//to use router we have to follow
//1.define router
//2.export router
//3. use the router
const router = new express.Router();

const MensRanking = require('../models/mens')



//we will handling post request
router.post("/mens", async(req,res)=>{
    try{
         //taking mensrankigng from the ./models/men.   req.body will get the data from the postman
         const addingMensrecords =  new MensRanking(req.body)
         console.log(req.body)
         // addingMensrecords- adding to database collections
          const insertMens = await addingMensrecords.save();
          res.status(201).send(insertMens) // insertMens - just to show this data is stored in the database
    }catch(e){
         res.status(400).send(e)
    }
 })
 
 //we will handle get request
 // Read all the documents
 router.get("/mens", async(req,res)=>{
     try{
        const getMens = await MensRanking.find({}).sort({"ranking":1});
        res.status(201).send(getMens);
     }catch(e){
         res.status(400).send(e);
     }
 })
 
 //Read single documents
 router.get("/mens/:id", async(req,res)=>{
     try{
         const _id = req.params.id;
        const getSingle = await MensRanking.find({_id:_id}); //first id is mongoid secondid is i am giving 
        res.status(201).send(getSingle);
     }catch(e){
         res.status(400).send(e);
     }
 })
 
 // update 
 
 router.patch("/mens/:id", async(req,res)=>{
     try{
         const _id = req.params.id;
         const updateData = await MensRanking.findByIdAndUpdate(_id,req.body); //first id is mongoid secondid is i am giving 
         res.send(updateData);
         console.log(req.body)
     }catch(e){
         res.status(400).send(e);
     }
 })
 
 //delete
 
 router.delete("/mens/:id", async(req,res)=>{
     try{
       
         const delData = await MensRanking.findByIdAndDelete(req.params.id); //first id is mongoid secondid is i am giving 
         res.send(delData);
     }catch(e){
         res.status(400).send(e);
     }
 })

 module.exports = router;