import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'; 

//initial State 
const   initialState =  { 
    users: [
 
]
};
 
// create a new context for the app
export const GlobalContext= createContext(initialState);

//Provider component were the data is going to live
// we need to rap our entire application in the global provider
//children should represent our app.js 
export const GlobalProvider= ({children}) =>{
    const [state, dispatch]= useReducer(AppReducer, initialState);
    //actions 
    //if we have action here, we need to add the case in the reducer 
    const removeUser= (id) => {
        dispatch({
            type: 'REMOVE_USER',
            payload: id 

        })
    }
    const addUser= (user) => {
        dispatch({
            type: 'ADD_USER',
            payload: user

        })
    }
    const editUser= (user) => {
        dispatch({
            type: 'EDIT_USER',
            payload: user

        })
    }
    return (
        <GlobalContext.Provider value={{
            users: state.users,
            removeUser,
            addUser, 
            editUser
        }}>
            {children}
        </GlobalContext.Provider>
    )   
}