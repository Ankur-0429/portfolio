import React from "react";
import Image from "next/image";
import Link from "next/link";
import iosImg from "../public/assets/mobile/WayPointIOS.png";
import androidImg from "../public/assets/mobile/RecycleMeAndroid.png";
import TimeLine from "./TimeLine";
import Technologies from "./Technologies";
import Technologies2 from "./Technologies2";
import TimeLine2 from "./TimeLine2";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <div
        id="projects"
        className="w-full md:h-screen p-2 flex items-center py-16">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="uppercase text-xl tracking-widest text-[#5651e5]">
              Projects
            </p>
            <h2 className="py-4">WayPoint</h2>
            <div
              className="flex flex-row items-center w-[12rem]"
              style={{ backgroundColor: "#FAF9F6", borderRadius: 10 }}>
              <div className="w-3 h-3 rounded-full bg-gray-400 mr-1 ml-2"></div>{" "}
              <span style={{ padding: 5 }}>Status: In progress</span>
            </div>
            <ul>
              <li className="py-2 text-gray-600">Real-Time Messaging App</li>
            </ul>
            <Technologies />
            <TimeLine />
          </div>
          <div className="w-full h-auto m-auto rounded-xl flex items-center justify-center p-4">
            <Image src={iosImg} className="rounded-xl" alt="/" />
          </div>
        </div>
      </div>

      <div
        id="projects"
        className="w-full md:h-screen p-2 flex items-center py-16">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h2 className="py-4">RecycleMe</h2>
            <div
              className="flex flex-row items-center w-[12rem]"
              style={{ backgroundColor: "#FAF9F6", borderRadius: 10 }}>
              <div className="w-3 h-3 rounded-full bg-green-400 mr-1 ml-2"></div>{" "}
              <span style={{ padding: 5 }}>Status: Complete</span>
            </div>
            <ul>
              <li className="py-2 text-gray-600">
                Trash Collection Mobile App
              </li>
            </ul>
            <Technologies2 />
            <TimeLine2 />
            <div className="flex flex-row mt-5">
              <a
                href="https://apps.apple.com/us/app/recycleme-usa/id1615887126"
                className="flex flex-row items-center py-2 px-1 mr-5 hover:scale-110 ease-in duration-300"
                style={{ backgroundColor: "#FAF9F6", borderRadius: 10 }}>
                <FaAppStoreIos size={30} />
                <div className="pl-2 text-black">App Store</div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.aankur01.greendayfrontend&hl=en_US&gl=US"
                className="flex flex-row items-center py-2 px-1 mr-5 hover:scale-110 ease-in duration-300"
                style={{ backgroundColor: "#FAF9F6", borderRadius: 10 }}>
                <FaGooglePlay size={30} />
                <div className="pl-2 text-black">Google Play</div>
              </a>
            </div>
          </div>
          <div className="w-full h-auto m-auto rounded-xl flex items-center justify-center p-4">
            <Image src={androidImg} className="rounded-xl" alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
