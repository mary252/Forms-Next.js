
"use client"
import "../styles.scss";
import { Ubuntu } from 'next/font/google'
import arcadImage from "../../assets/images/icon-arcade.svg"
import CustomCheckbox from "../components/customCheckbox";
import clsx from "clsx";
import Image from 'next/image'
import { Switch } from "@nextui-org/switch";
import { CartContext } from "../../context/mainContext";

import { useState, useContext } from "react";
const ubunto = Ubuntu({
  weight: ["300", '400', "500", '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
export default function Home() {

  const {
    type,
    additionalItems
  } = useContext(CartContext);

  const addAddonstoContext = () => {
    let addsonArray=[]


  }
  return (
    <div className=" p-5 margins">
      <h2 className={"text-slate-800 large-ft font-bold " + ubunto.className}>Pick Add-ons</h2>
      <h5 className={"text-xl text-slate-400 mb-7 " + ubunto.className}>Add-ons enhance your gaming expierience</h5>
      <div className="">
       
      </div>

      <div className="flex justify-end div-wrap">
        <button className="button-wrap mt-7 py-3 px-4 m-3" onClick={()=>addAddonstoContext()}>Submit</button>
      </div>
    </div>
  );
}