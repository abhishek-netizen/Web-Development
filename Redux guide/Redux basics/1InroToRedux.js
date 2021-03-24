// Redux

// Store is a single source of truth, it accessible all parts of the UI
// What we can use in store is completely up to us we can have arrays,string,boolean,objects etc
// we can directly modify or mutate the store, because redux is built on the top of functional programming principles, 
// In functional programming we do not mutate state

// we cannot able to write like this in our store
store.currentuser = { name: "mosh" } // we are not allowed to mutate
//so


function reducer(store) {
    // return updated store
    const updated = { ...store };
}

//This above function is called as REDUCER
//REDUCER is a store it takes current value of store and return the update value of store


//How does the reducer know what properties in the store it should update? 
// it has to update 
// updated.cart = ??
//     updated.price = ??
// updated.number = ??   //which one?

// Thats where the ACTION kicks in.
//The action is a plain javascript objects that decribes what just happened
// action is a second paramter to our reducer function
// ex for actions are login, logout , added to cart  etc
// based on type of action, reducer will know what properties of state to update

function reducer(store, action) {  
    const updated = { ...store };
}

// Building blocks of redux application

//ACTION //STORE //REDUCER
//event          // event handler


//Reducer :- this reducers are pure functions, they dont touch global state, they dont mutate there arguments, they dont have any sideeffects
// they just get current store instance and returns the updated one

//How does these three building blocks work together??

//when user adds an item to shopping cart we create an action object and dispatch it 
// store object has a dispatch method which takes action
// which will then forward this action to reducer 
// we are not calling reducer directly, store is in charge of calling reducer 
// reducer computes the new state and returs it
// store will set the state internally and then not



//Steps you should follow to design redx::-
//1.Design the store (what you will keep in store)
//2.Define the action (what are the actions user can perform in this application)
//3.Create a reducer (take an action and returen updated state)
//4.Steup the store (based on reducer)