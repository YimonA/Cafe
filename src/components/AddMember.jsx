import React from "react";

const AddMember = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold mt-8">Add new member</h1>
      <form action="" className=" max-w-md mx-auto">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs mb-3"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs mb-3"
          />
        </div>
        <div className="flex justify-center">
          <button className="btn btn-active mb-3">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddMember;
