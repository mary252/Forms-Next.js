
"use client"
import "../styles.scss";
import { Ubuntu } from 'next/font/google'
import arcadImage from "../../assets/images/icon-arcade.svg"
import CustomCheckbox from "../components/customCheckbox";
import clsx from "clsx";
import Image from 'next/image'
import { Switch } from "@nextui-org/switch";
import { CartContext } from "../../context/mainContext";
import { useRouter } from 'next/navigation'

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
    addAddons
  } = useContext(CartContext);
  const [isOnlineSelected, setIsOnlineSelected] = useState(false)
  const [isStorageSelected, setIsStorageSelected] = useState(false)
  const [isProfileSelected, setIsProfileSelected] = useState(false)
  const router = useRouter()

  const addAddonstoContext = () => {
    let addsonArray = []

    if (isOnlineSelected) {
      addsonArray.push({
        name: "Online Service",
        price: type.yearly ? 10 : 1
      })
    }
    if (isStorageSelected) {
      addsonArray.push({
        name: "Larger Storage",
        price: type.yearly ? 20 : 2
      })
    }
    if (isProfileSelected) {
      addsonArray.push({
        name: "Customizable Profile",
        price: type.yearly ? 20 : 2
      })
    }
    addAddons({
      addons: addsonArray
    })
    router.push("/home/checkout")

  }
  return (
    <div className=" p-5 margins">
      <h2 className={"text-slate-800 large-ft font-bold " + ubunto.className}>Pick Add-ons</h2>
      <h5 className={"text-xl text-slate-400 mb-7 " + ubunto.className}>Add-ons enhance your gaming expierience</h5>
      <div className="">
        <div
          className={clsx(
            'option-card my-2 cursor-pointer w-full flex justify-between p-5',
            {
              'selected-plan-card': isOnlineSelected,
              '': !isOnlineSelected,
            },
          )}
          onClick={() => setIsOnlineSelected(!isOnlineSelected)}
        >
          <div className="flex">
            <CustomCheckbox checked={isOnlineSelected} />
            <div className="mx-3">
              <p className={"text-slate-800 font-bold " + ubunto.className}>Online Service</p>
              <p className={" text-slate-400  " + ubunto.className}>
                Access to Multiplayer games
              </p>
            </div>
          </div>
          <div>
            <p className={" text-indigo-400 mt-2 " + ubunto.className}>
              {type.yearly ? "$10/yr" : "$1/mo"}
            </p>
          </div>
        </div>
        <div
          className={clsx(
            'option-card my-3 cursor-pointer w-full flex justify-between p-5',
            {
              'selected-plan-card': isStorageSelected,
              '': !isStorageSelected,
            },
          )}
          onClick={() => setIsStorageSelected(!isStorageSelected)}
        >
          <div className="flex">
            <CustomCheckbox checked={isStorageSelected} />
            <div className="mx-3">
              <p className={"text-slate-800 font-bold " + ubunto.className}>Larger Storage</p>
              <p className={" text-slate-400  " + ubunto.className}>
                Extra 1TB of cloud save
              </p>
            </div>
          </div>
          <div>
            <p className={" text-indigo-400 mt-2 " + ubunto.className}>
              {type.yearly ? "$20/yr" : "$2/mo"}
            </p>
          </div>
        </div>
        <div
          className={clsx(
            'option-card my-3 cursor-pointer w-full flex justify-between p-5',
            {
              'selected-plan-card': isProfileSelected,
              '': !isProfileSelected,
            },
          )}
          onClick={() => setIsProfileSelected(!isProfileSelected)}
        >
          <div className="flex">
            <CustomCheckbox checked={isProfileSelected} />
            <div className="mx-3">
              <p className={"text-slate-800 font-bold " + ubunto.className}>Customizable Profile</p>
              <p className={" text-slate-400  " + ubunto.className}>
                Custom Theme on Your Profile
              </p>
            </div>
          </div>
          <div>
            <p className={" text-indigo-400 mt-2 " + ubunto.className}>
              {type.yearly ? "$20/yr" : "$2/mo"}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between div-wrap">
        <button className=" text-slate-400 font-medium mt-7 py-3 px-4 m-3" onClick={() => router.push("/home/plan")}>
          Go Back
        </button>

        <button className="button-wrap mt-7 py-3 px-4 m-3" onClick={() => addAddonstoContext()}>Submit</button>
      </div>
    </div>
  );
}