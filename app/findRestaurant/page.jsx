"use client"
import React, { useEffect, useState } from "react";
import { Input } from "../components/ui/input.jsx"
import { Button } from "../components/ui/button"
import axios from 'axios';
import Link from "next/link"


function findRestaurant(){
    const [data, setData] = useState(null);
    const [clicked, isClicked] = useState(false);
    const [value, setValue] = useState("");

      function getData (value) {
        axios.get(`https://treehacks-api.onrender.com/restaurants?address=${value}`).then(res =>{
          console.log(res);
          setData(res.data);
          isClicked(true);
        });
    console.log(data);
        }
    // if (!data) {
    //     return <div>Loading...</div>;
    //   }
      console.log(clicked);
    return (  
        <><header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/">
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/itemChecker">
            Item Checker
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/findRestaurant">
            Sustainable Restaurants
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/trackTransport">
            Daily Transportation Tracker
          </Link>
        </nav>
      </header><div className="grid gap-6 items-start w-full lg:px-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Sustainable Restaurants</h1>
            <p className="text-gray-500 dark:text-gray-400">
              A list of sustainable restaurants along with their names and addresses.
            </p>
          </div>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input className="w-300" placeholder="Search" type="search" value={value} onChange={e => setValue(e.target.value)}/>
            <Button type="submit" onClick={() => getData(value)}>Search</Button>
          </div>
        </div>
      {
        clicked ? 
        <div className="flex flex-col md:gap-4 pt-10 pl-6">
          <div className="grid md:grid-cols-3 gap-4">
            {
              data.names.map(items => (
                <div className="flex flex-col gap-1.5">
              <h3 className="font-bold">{items.name}</h3>
              <p className="text-sm">
                {items.direction}
              </p>
            </div>
              ))
            }
          </div>
          <div>
          </div>
          <div className="flex flex-col items-center gap-10">
            <img src={data.static_map} />
          </div>
          </div>  
          : null
      } 
      </>
      );
}
function MountainIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>)
    );
  }
export default findRestaurant;