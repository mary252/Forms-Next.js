"use client"
import React, { createContext, useReducer } from "react";
import { MainReducer} from "./mainReducer";

interface subType{
  type?:string,
    yearly?:boolean
    price?:number
}
type contextInterface = {
  additionalItems: Array<any>;
  type: subType;
  
  AddSubType?:Function
};
const initialState = {
  additionalItems: [],
  type:{},
  // AddSubType:()=> {}
};
export const CartContext = createContext<contextInterface>(initialState);

console.log(initialState)

const CartContextProvider = ({ children }:{
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(MainReducer, initialState);
  // console.log(state)
  const AddSubType = (payload:subType) => {
    dispatch({ type: "ADD_SUB_TYPE", payload });
  };
  
  const addAddons = (payload:any) => {
    dispatch({ type: "ADD_ADD-ONS", payload });
  };


  const contextValues = {
    AddSubType,
    addAddons,
    ...state,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;