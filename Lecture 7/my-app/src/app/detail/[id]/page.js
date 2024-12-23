import React from "react";
import { getEventById } from "../../../data"; // Adjust the import path if needed
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
function EventDetailPage({ params }) {
  const eventId = parseInt(params.id); // Convert the id to a number
  const event = getEventById(eventId); // Find the event by id

  if (!event) {
    return <div className="text-center">Event not found</div>;
  }

  return (
    <div className="bg-gray-300 min-h-screen">
      <div className=" bg-cyan-500 h-52   pt-9 flex items-start   justify-center text-white">
        <h1 className="text-5xl font-bold">{event.title}</h1>
      </div>
      <div className="flex flex-col items-center p-5 ">
        <div className="bg-gray-800 text-gray-200 p-5  absolute top-28  rounded-lg shadow-lg flex items-center justify-center gap-16 w-3/5">
          <Image
            src={event.img}
            alt={event.title}
            
            width={700} // Adjust the width and height as necessary
            height={700}
            className="rounded-full border-white border-4 w-[300px] h-[300px] object-cover mr-5"
          />
          <div className="flex flex-col text-cyan-300">
            <div className="mb-2 flex items-start gap-3 flex-col">
            <FaCalendarAlt />
              <span>{event.date}</span>
              <FaLocationDot />
              <span>{event.subTitle}</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-5 text-xl text-gray-700 pt-[300px]">{event.description}</div>
      </div>
    </div>
  );
}

export default EventDetailPage;
