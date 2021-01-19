export default (state, action) => { 
    switch (action.type) {
        case 'REMOVE_USER': 
        return {
            users: state.users.filter(user => {
                return user.id !== action.payload
            })
        }
        case 'ADD_USER': 
        return {
            users: [ action.payload, ...state.users]
          };
          case 'EDIT_USER': 
          const updateduser=action.payload;
          const updatedusers=state.users.map(
              user => { 
                  if (user.id===updateduser.id) {
                      return updateduser;
                  }
                  return user;
              }
          )
          return {
              
              users:updatedusers
            };      
        
        
        default:
             return state
    }
}