import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="bg-white rounded-xl p-8 text-center text-black flex items-center flex-col justify-center gap-5">
        {props.icon}
        <h4 className="text-xl font-bold">{props.title}</h4>
        <p>{props.description}</p>
        <h4 className="text-xl font-bold">{props.subheading}</h4>
      </div>
    </div>
  );
};

export default Card;
