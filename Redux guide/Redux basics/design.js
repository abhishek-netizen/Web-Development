//1. DESIGN STORE

const { head } = require("lodash")

{
    bugs: [                           // One slice for bugs 
        {
            id: 1,
            description: " ",
            resolved: false
        }
        
    ],
        currentUser : {}     // one for current user  // Which means we have two different Reducers
}

//2. DEFINE AN ACTION

 // add a bug, mark as resolved, delete a bug

{
    type: "ADD_BUG",    //type: "bugAdded"
    description: " "    //Data associtaed with action, if you add a bug you store that value in description property
}


//In flux following architecture is used 
// We can also use the same for redux as redux dont care

{
    type: "bugAdded",
        payload: {
            id: 1 //   description: " "
         }
}

//3. CREATING REDUCER 

