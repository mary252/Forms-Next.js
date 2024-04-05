

export const MainReducer = (state:any, action:any) => {
  console.log(state)
  switch (action.type) {
    case "ADD_SUB_TYPE":
      
      return {
        ...state,
        type:action.payload.type
      };
    case "ADD_ADD-ONS":

      return {
        ...state,
        additionalItems: action.payload.addons
      };

    default:
      return state;
  }
};