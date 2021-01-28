//Events module 
//Node.js has a built in module, called events
// where you can create-,fire-, and listen for- your own events

//Example-1 Registering for the event to be fired only one time using once
const EventEmmiter = require('events');

const event = new EventEmmiter();

event.on('sayMyName',()=>{
    console.log("Your name is Ganesha")
})

event.emit("sayMyName")

//Example-2 Create an event emmiter instance and register a couple of callbacks

const EventEmmiter = require('events')

const event = new EventEmmiter();

event.on('myName',()=>{
    console.log('My name is tonyStark')
})

event.on('myName',()=>{
    console.log("My name is thor")
})

event.on('myName',()=>{
    console.log('my name is Hulk')
})

event.emit("myName") 

//3. Registering for the event with callback
const EventEmmiter = require('events');
const event = new EventEmmiter();

event.on('checkPage',(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`)
})

event.emit("checkPage",200,"ok");
