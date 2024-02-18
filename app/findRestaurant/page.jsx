"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link"


function findRestaurant(){
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('https://treehacks-api.onrender.com/restaurants?address=Stanford%20University')
          .then(response => response.json())
          .then(json => setData(json))
          .catch(error => console.error(error));
      }, []);
    if (!data) {
        return <div>Loading...</div>;
      }
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
      </header>  
      <div className="grid md:grid-cols-2 gap-6 items-start w-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Sustainable Restaurants</h1>
        <p className="text-gray-500 dark:text-gray-400">
          A list of sustainable restaurants along with their names, addresses, and a brief description.
        </p>
      </div>
      <div className="flex flex-col md:gap-4">
        <div className="grid md:grid-cols-3 gap-4">
          {
            data.names.map(items => (
              <div className="flex flex-col gap-1.5">
            <h3 className="font-bold">{items}</h3>
            <p className="text-sm">
              Offers a fusion of global flavors using sustainable and ethically sourced ingredients.
            </p>
          </div>
            ))
          }
        </div>
        <div className="w-full h-[500px] rounded-lg overflow-hidden relative">
        <div>
          <img src={data.static_map} />
        </div>
        </div>
      </div>
    </div>)    
       
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