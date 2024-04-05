
"use client"
import "../styles.scss";
import { Ubuntu } from 'next/font/google'
import arcadImage from "../../assets/images/icon-arcade.svg"
import CustomCheckbox from "../components/customCheckbox";
import clsx from "clsx";
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { CartContext } from "../../context/mainContext";

import { useState, useContext, useEffect } from "react";
const ubunto = Ubuntu({
  weight: ["300", '400', "500", '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
export default function Home() {
  const [totalPrice,setTotalPrice]=useState(0)
  const {
    type,
    additionalItems
  } = useContext(CartContext);
  const router=useRouter()
  useEffect(()=>{
    let totalPriceNow=type?.price
    additionalItems?.map((item)=>{
      totalPriceNow=totalPriceNow+item.price
    })
    setTotalPrice(totalPriceNow?totalPriceNow:0)
  },[type,additionalItems])

  useEffect(()=>{
    if(!type.type || !additionalItems){
      router.push(`/home/userInfo`)
    }
  },[type,additionalItems])
  return (
    <div className=" p-5 margins">
      <h2 className={"text-slate-800 large-ft font-bold " + ubunto.className}>Finishing up</h2>
      <h5 className={"text-xl text-slate-400 mb-7 " + ubunto.className}>
        Double-check everything looks OK before confirming
      </h5>
      <div className="bg-indigo-100	rounded-md py-4 px-3 mb-3">
        <div className="flex justify-between my-3">
          <div>
            <p className={"text-slate-800 font-bold " + ubunto.className}>{type.type}({type.yearly ? "Yearly" : "Monthly"})</p>
            <p className={" text-slate-400 underline underline-offset-4 " + ubunto.className}>
              change
            </p>
          </div>
          <div>
            <p className={"text-slate-800 font-bold " + ubunto.className}>${type.price}{type.yearly ? "/yr" : "/mo"}</p>

          </div>
        </div>
        <hr className="solid p-2"/>
        {
          additionalItems.map((item, index) => (
            <div className="flex justify-between my-5" key={index}>
              <p className={" text-slate-400 underline underline-offset-4 " + ubunto.className}>
                {item.name}
              </p>
              <p className={"text-slate-800 " + ubunto.className}>+${item.price}{type.yearly ? "/yr" : "/mo"}</p>
            </div>
          ))
        }
      </div>
      <div className="flex justify-between my-5 mx-3">
        <p className={" text-slate-400  " + ubunto.className}>
          Total (per {type.yearly ? "year" : "month"})
        </p>
        <p className={"text-indigo-800 font-bold text-xl " + ubunto.className}>+${totalPrice}{type.yearly ? "/yr" : "/mo"}</p>
      </div>

      <div className="flex justify-between div-wrap">
      <button className=" text-slate-400 font-medium mt-7 py-3 px-4 m-3" onClick={() => router.push("/home/addons")}>
          Go Back
        </button>
        <button className="button-wrap mt-7 py-3 px-4 m-3" onClick={() => {router.push(`/home/thankyou`)}}>Confirm</button>
      </div>
    </div>
  );
}