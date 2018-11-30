

export default (state = {}, action) => { //creating state as an empty object
   switch (action.type){
       case 'LOGIN':
           //set uid to users ID that we get from google
           return {
               uid: action.uid
           }
       case 'LOGOUT':
           //return an empty object
           return {};
       default:
           //returns the current state
           return state;
   }
};