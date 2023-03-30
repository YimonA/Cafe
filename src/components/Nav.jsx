import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" container mx-auto w-full sticky top-0 mb-10 z-10 text-white font-semibold ">
      <div className="navbar bg-cyan-400">
        <div className="flex-1">
          <Link to={"/"}>
            <a className="btn btn-ghost normal-case text-xl">Casa Cafe</a>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <Link to={"/allcoffee"}>
              <li>
                <a>All Coffee</a>
              </li>
            </Link>
            <Link to={"/members"}>
              <li>
                <a>Members</a>
              </li>
            </Link>
            <Link to={"/aboutus"}>
              <li>
                <a>About us</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
