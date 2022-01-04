import React, {useReducer, createContext, useContext } from 'react';

const initialState = {
    show: "1"
}; 

function showReducer(state, action){
    switch(action.type){
        case 'CHANGE':
            console.log(action.show);
            return {...state, show : action.show}
        default :
            return state;
    }
}

const ShowContext = createContext();
const ShowDispatchContext = createContext();

export function ShowProvider({children}){
    const [state, dispatch] = useReducer(showReducer, initialState);
    return(
        <ShowContext.Provider value={state}>
            <ShowDispatchContext.Provider value={dispatch}>
                {children}
            </ShowDispatchContext.Provider>
        </ShowContext.Provider>
    );
}

export function useShowState(){
    return useContext(ShowContext);
}

export function useShowDispatch(){
    return useContext(ShowDispatchContext);
}