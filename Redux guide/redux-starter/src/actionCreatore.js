import * as actions from './actionType';


export function bugAdded(description) {
    return {
        type: actions.BUG_ADDED,
        payload: {
            description: description
        }
    }
}


//You can also try using arrow

// export const bugAdded = description => ({
//     type: actions.BUG_ADDED,
//     payload: {
//         description: "Bug1"
//     }
// });


export function bugRemoved(id) {
    return {
        type: actions.BUG_REMOVED,
        payload: {
           id: 1
        }
    }
}

export function bugResolved(id) {
    return {
        type: actions.BUG_RESOLVED,
        payload: {
            id:id
        }
    }
}