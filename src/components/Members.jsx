import React from "react";
import { Link } from "react-router-dom";
import AddMember from "./AddMember";

const Members = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold mt-8">Our Members</h1>
      <div className="flex justify-center items-center gap-8 card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <Link to={"/addmember"}>

            <button className="btn btn-primary">Add Members</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
