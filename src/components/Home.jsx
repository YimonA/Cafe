import React from "react";
import { useContextCustom } from "../context/stateContext";
import Card from "./Card";
import Grab from "./Grab";

const Home = () => {
  const { coffeeList } = useContextCustom();
  return (
    <div className=" container mx-auto">
      <div className="mt-8">
        <div className="carousel w-full max-w-6xl max-h-80 m-auto">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
"
              className="w-full object-cover" loading="lazy"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://images.pexels.com/photos/769158/pexels-photo-769158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-full object-cover" loading="lazy"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://images.pexels.com/photos/3735183/pexels-photo-3735183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-full object-cover" loading="lazy"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://images.pexels.com/photos/5414010/pexels-photo-5414010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-full object-cover" loading="lazy"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <h1 className=" text-center text-4xl font-bold mt-8">Featured Coffee</h1>
      <div className=" container mx-auto flex flex-wrap gap-6 justify-center mt-8">
        {coffeeList?.slice(0,3).map((coffee) => {
          return <Card key={coffee.id} {...coffee}></Card>;
        })}
      </div>

      <h1 className=" text-center text-4xl font-bold mt-8">
        Grab Your Favorite One
      </h1>
      <div className=" container mx-auto flex flex-wrap gap-6 justify-center mt-8">
        {coffeeList?.slice(0, 2).map((coffee) => {
          return <Grab key={coffee.id} {...coffee}></Grab>;
        })}
      </div>
        <button className="flex justify-center btn btn-outline mt-8 mx-auto">
          View All Items
        </button>
    </div>
  );
};

export default Home;
