import store from './store';

import { bugAdded, bugRemoved, bugResolved } from './actionCreatore';


// console.log(store);
//dispatch: ƒ dispatch(action)
//getState: ƒ getState()
//replaceReducer: ƒ replaceReducer(nextReducer)
//subscribe: ƒ subscribe(listener)
//Symbol(observable): ƒ observable()
//__proto__: Object


// Subscribing to the store:  UI component should subscribe to the store so they will get notified when the state of the store changes 
// store.subscribe(() => {
//     console.log("store changed", store.getState());
// })

// Unsubscribe from the store: it is possible that user navigate away from the current page in the new page we are not going to have UI component
// we dont have to subscribtion to those store, because this subscription may gives memory leaks 
// so if the current UI component is not gonna be visible i will unsubscribe from the store

const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
})




// Dispatch action when user click add button  for adding a bug

store.dispatch(bugAdded("Bug 1"));


// unsubscribe(); // if you uncomment , you will not notified the second ui changed i.e removed


// Dispatch action for removing a bug when a user click Removing a bug
// store.dispatch(bugRemoved());

// Resolving a bug: when user clicked on resolve button
store.dispatch(bugResolved(1));

// console.log(store.getState()) //[]