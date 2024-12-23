import Image from "next/image";
import Card from "../components/Card";
import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaPencilRuler } from "react-icons/fa";
import { BsFillBagPlusFill } from "react-icons/bs";
export default function Home() {
  const description1 =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit officia quis deserunt voluptas. Aperiam  sit mollitiavero animi veniam modi, et, quo culpa nisi nam ipsum ducimus errorsequi incidunt delectus voluptates voluptatum  ad. Labore,impedit dicta?";
  const icon1 = <FaPencilRuler className="text-3xl" />;
  const title1 = "Title 1";
  const subheading1 = "subheading1";
  const description2 =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit officia quis deserunt voluptas. Aperiam  sit mollitiavero animi veniam modi, et, quo culpa nisi nam ipsum ducimus errorsequi incidunt delectus voluptates voluptatum  ad. Labore,impedit dicta?";
  const icon2 = <IoMdSettings className="text-3xl" />;
  const title2 = "Title 2";
  const subheading2 = "subheading2";
  const description3 =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit officia quis deserunt voluptas. Aperiam  sit mollitiavero animi veniam modi, et, quo culpa nisi nam ipsum ducimus errorsequi incidunt delectus voluptates voluptatum  ad. Labore,impedit dicta?";
  const icon3 = <BsFillBagPlusFill className="text-3xl" />;
  const title3 = "Title 3";
  const subheading3 = "subheading3";
  return (
    <div className="bg-blue-950 min-h-screen p-6 lg:px-20  text-white">
      {/*Header*/}
      <div className=" flex items-center justify-between md:p-[20px]">
        <h4 className="text-[20px] font-bold">Next JS</h4>
        <button className="bg-blue-300 py-2 px-9 font-bold rounded-xl hover:bg-blue-500">
          CV
        </button>
      </div>
      {/*section 2*/}
      <div className=" w-[50%] mx-auto text-center  space-y-5">
        <h2 className="mt-20 text-3xl text-blue-400 font-bold">John Wick</h2>
        <h4 className="text-xl font-bold">Actor and Artist</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed sit amet nulla auctor
        </p>

        <div className="w-[250px] flex justify-between  items-center mx-auto">
          <FaSquareFacebook className="text-3xl" />
          <IoLogoYoutube className="text-3xl" />
          <FaLinkedin className="text-3xl" />
        </div>
        <Image
          src="/images/img1.jpg"
          className="mx-auto rounded-full "
          height={300}
          width={300}
        />
      </div>
      {/*section 3*/}
      <div className="space-y-7 my-20">
        <h4 className="text-white text-2xl font-bold">Services I offer</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed sit amet nulla auctor Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed sit amet nulla auctor Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed sit amet nulla auctor
        </p>
        {/*cards*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/*section1*/}
          <Card
            title={title1}
            icon={icon1}
            description={description1}
            subheading={subheading1}
          />
          <Card
            title={title2}
            icon={icon2}
            description={description2}
            subheading={subheading2}
          />
          <Card
            title={title3}
            icon={icon3}
            description={description3}
            subheading={subheading3}
          />
        </div>
      </div>
      {/*section 4*/}
      <div className=" space-y-5 my-28">
        <h4 className="text-white text-2xl font-bold">Services I offer</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed sit amet nulla auctor Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed sit amet nulla auctor Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed sit amet nulla auctor
        </p>
        {/*pictures*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <img
            src="/images/image6.jpg"
            alt="Image 1"
            className="w-full h-auto object-cover"
          />
          <img
            src="/images/image6.jpg"
            alt="Image 2"
            className="w-full h-auto object-cover"
          />
          <img
            src="/images/image6.jpg"
            alt="Image 3"
            className="w-full h-auto object-cover"
          />
          <img
            src="/images/image6.jpg"
            alt="Image 4"
            className="w-full h-auto object-cover"
          />
          <img
            src="/images/image6.jpg"
            alt="Image 5"
            className="w-full h-auto object-cover"
          />
          <img
            src="/images/image6.jpg"
            alt="Image 6"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
