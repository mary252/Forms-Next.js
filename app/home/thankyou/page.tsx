
"use client"
import "../styles.scss";
import { Ubuntu } from 'next/font/google'
import arcadImage from "../../assets/images/icon-thank-you.svg"
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


  return (
    <div className=" p-5 flex flex-col items-center  margins">
      <Image src={arcadImage} alt="" className="md:mb-10 my-3 mr-3 md:mr-0" />
      <h2 className={"text-slate-800 large-ft font-bold " + ubunto.className}>Thank you!</h2>
      <h5 className={"text-xl text-slate-400 mb-7 text-center " + ubunto.className}>
        Thank you for confirming you subscription we home you have fun on our platform. if you ever need support
        please feel free to email us
      </h5>

    </div>
  );
}