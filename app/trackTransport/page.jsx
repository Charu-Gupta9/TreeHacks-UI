"use client"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import Link from "next/link"
import React, { useEffect, useState } from "react";

function TrackTransport(){
        const [data, setData] = useState(null);
        useEffect(() => {
            fetch('https://treehacks-api.onrender.com/route_map?origin=Stanford%20University&destination=Caltrain%20Palo%20Alto&mode=TRANSIT')
              .then(response => response.json())
              .then(json => setData(json))
              .catch(error => console.error(error));
          }, []);
        if (!data) {
            return <div>Loading...</div>;
          }
          console.log(data.link);
        return(
            <><header className="px-4 lg:px-6 h-14 flex items-center">
            <Link className="flex items-center justify-center" href="#">
              <MountainIcon className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <div>
      
      
              {/* <navbar className="text-sm font-medium hover:underline underline-offset-4" /> */}
            </div>
      
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
            <div className="grid gap-4 min-h-screen">
                    <div className="mx-auto max-w-4xl">
                        <header
                            className="flex items-center justify-between py-6 md:py-8 lg:py-12">
                        </header>
                        <main>
                            <section className="w-full pb-20">
                                <div
                                    className="container flex flex-col items-center justify-center space-y-4 px-4 text-center md:px-6">
                                    <div className="space-y-2 pb-8">
                                        <h1
                                            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                            Sustainable Transportation
                                        </h1>
                                        <p
                                            className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                            Discover eco-friendly ways to get around and reduce your carbon footprint.
                                        </p>
                                    </div>
                                </div>
                                <div >
                <iframe src={data.link} className="container grid items-center gap-12 px-10 md:px-6" />
            </div>
                            </section>
                            <section className="grid gap-12">
                                <div className="container grid items-center gap-4 px-20 md:px-20">
                                    <div className="flex items-center gap-7">
                                        <img
                                            alt="Electric Vehicle"
                                            className="rounded-xl object-cover"
                                            height="96"
                                            src="/electric.png"
                                            style={{
                                                aspectRatio: "96/96",
                                                objectFit: "cover",
                                            }}
                                            width="96" />
                                        <div className="space-y-2">
                                            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Electric Vehicles</h2>
                                            <p
                                                className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                                Embrace the future of transportation with zero-emission electric vehicles.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="container grid items-center gap-4 px-20 md:px-20">
                                    <div className="flex items-center gap-4">
                                        <img
                                            alt="Public Transportation"
                                            className="rounded-xl object-cover"
                                            height="96"
                                            src="/bus.png"
                                            style={{
                                                aspectRatio: "96/96",
                                                objectFit: "cover",
                                            }}
                                            width="96" />
                                        <div className="space-y-2">
                                            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Public Transportation</h2>
                                            <p
                                                className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                                Convenient and sustainable. Explore the benefits of using public transit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="container grid items-center gap-4 px-20 md:px-20">
                                    <div className="flex items-center gap-4">
                                        <img
                                            alt="Biking and Walking"
                                            className="rounded-xl object-cover"
                                            height="96"
                                            src="/bike.png"
                                            style={{
                                                aspectRatio: "96/96",
                                                objectFit: "cover",
                                            }}
                                            width="96" />
                                        <div className="space-y-2">
                                            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Biking and Walking</h2>
                                            <p
                                                className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                                Stay active while reducing emissions. Discover the joy of cycling and walking.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="w-full py-12 md:py-24 lg:py-32">
                            </section>
                        </main>
                    </div>
                </div></>)
        
}

function FlagIcon(props) {
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
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" x2="4" y1="22" y2="15" />
      </svg>)
    );
  }
  
  
  function GlobeIcon(props) {
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
        <circle cx="12" cy="12" r="10" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <path
          d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>)
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
  
export default TrackTransport;