import React from "react";

const Grab = (props) => {
  const { image,title, description } = props;
  return (
    <div className=" ">
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src={image} alt={title} className=" h-52" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grab;
