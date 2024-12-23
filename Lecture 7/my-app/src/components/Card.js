"use client"
import React from "react";
import { useRouter } from "next/navigation"; // Use next/navigation instead of next/router

function Card({ img, title, date, subTitle, id }) {
  const router = useRouter();

  const navigateToDetail = () => {
    router.push(`/detail/${id}`); // Navigates to the dynamic route for the event
  };

  return (
    <div className="flex w-full h-[200px] text-black rounded-lg">
      <div className="h-full w-[500px]">
        <img src={img} className="h-full w-full object-cover" alt="" />
      </div>
      <div className="bg-gray-200 p-4 rounded-lg h-full overflow-hidden flex flex-col gap-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-600">{date}</p>
        <p className="text-gray-600">{subTitle}</p>
        <button
          onClick={navigateToDetail} // Call the navigate function on button click
          className="bg-green-500 px-8 py-1 rounded-md self-end"
        >
          Explore Event
        </button>
      </div>
    </div>
  );
}

export default Card;
