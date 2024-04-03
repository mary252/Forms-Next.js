
"use client"
import "../styles.scss";
import { Ubuntu } from 'next/font/google'
import arcadImage from "../../assets/images/icon-arcade.svg"
import advancedImage from "../../assets/images/icon-advanced.svg"
import proImage from "../../assets/images/icon-pro.svg"
import clsx from "clsx";
import Image from 'next/image'
import { Switch } from "@nextui-org/switch";

import { useState } from "react";
const ubunto = Ubuntu({
  weight: ["300", '400', "500", '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
export default function Home() {
  const [selected, setSelected] = useState(1)
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className=" p-5 margins">
      <h2 className={"text-slate-800 large-ft font-bold " + ubunto.className}>Select Your plan</h2>
      <h5 className={"text-xl text-slate-400 mb-7 " + ubunto.className}> You have the options of monthly, yearly billing</h5>
      <div className="md:columns-3">
        <div
          className={clsx(
            'plan-card cursor-pointer ',
            {
              'selected-plan-card': selected === 1,
              '': selected !== 1,
            },
          )}
          onClick={() => setSelected(1)}
        >
          <Image src={arcadImage} alt="" className="md:mb-10 my-3 mr-3 md:mr-0" />
          <div>
            <p className={"text-slate-800 font-bold " + ubunto.className}>Arcade</p>
            <p className={" text-slate-400  " + ubunto.className}>
              {isYearly ? "$90/yr" : "$9/mo"}
            </p>
            {isYearly && <p className={" text-slate-800 font-medium " + ubunto.className}>2 months free</p>}
          </div>

        </div>

        <div
          className={clsx(
            'plan-card cursor-pointer my-3',
            {
              'selected-plan-card': selected === 2,
              '': selected !== 2,
            },
          )}
          onClick={() => setSelected(2)}
        >
          <Image src={advancedImage} alt="" className="md:mb-10 my-3 mr-3 md:mr-0" />
          <div>
            <p className={"text-slate-800 font-bold " + ubunto.className}>Advanced</p>
            <p className={" text-slate-400  " + ubunto.className}>
              {isYearly ? "$120/yr" : "$12/mo"}
            </p>
            {isYearly && <p className={" text-slate-800 font-medium " + ubunto.className}>2 months free</p>}
          </div>

        </div>

        <div
          className={clsx(
            'plan-card cursor-pointer my-3',
            {
              'selected-plan-card': selected === 3,
              '': selected !== 3,
            },
          )}
          onClick={() => setSelected(3)}
        >
          <Image src={proImage} alt="" className="md:mb-10 my-3 mr-3 md:mr-0" />
          <div>
            <p className={"text-slate-800 font-bold " + ubunto.className}>Pro</p>
            <p className={" text-slate-400  " + ubunto.className}>
              {isYearly ? "$150/yr" : "$15/mo"}
            </p>
            {isYearly && <p className={" text-slate-800 font-medium	 " + ubunto.className}>2 months free</p>}
          </div>
        </div>
      </div>
      <div className="bg-slate-100 w-full h-14 mt-6 flex justify-center py-3">
        <span
          className={clsx(
            " mx-5 font-bold " + ubunto.className,
            {
              'text-slate-800': !isYearly,
              'text-slate-500': isYearly,
            },
          )}
        >Monthly</span>
        <Switch aria-label="Automatic updates" color="default" onChange={() => setIsYearly(!isYearly)} />
        <span
          className={clsx(
            " mx-5 font-bold " + ubunto.className,
            {
              'text-slate-800': isYearly,
              'text-slate-500': !isYearly,
            },
          )}
        >Yearly</span>
      </div>
      <div className="flex justify-end div-wrap">
        <button className="button-wrap mt-7 py-3 px-4 m-3" type="submit">Submit</button>
      </div>
    </div>
  );
}