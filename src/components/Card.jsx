import React from "react";

const Card = (props) => {
  const { id, title, image, description, ingredients } = props;
  return (
    <div className="">
      <div className="card max-w-xs rounded bg-base-100 shadow-xl">
        <figure className="">
          <img src={image} className=" h-52 w-64" alt="Coffee" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">Hot</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{ingredients[0]}</div>
            <div className="badge badge-outline">{ingredients[1]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
