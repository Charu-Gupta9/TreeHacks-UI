/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Wg5DEbQVoid
 */
"use client"
import Link from "next/link"
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import { Dashboard } from "../../components/dashboard"
import { GraphCarbon } from "@/components/graph-carbon"


var markers = [{
  "content":"Amazon","lat":-8.36,"lng":-68.69,"link":"https://www.worldwildlife.org/places/amazon"},
  {"content":"Yangtze","lat":28.0,"lng":115.0,"link":"https://www.worldwildlife.org/places/yangtze"},
  {"content":"Southern Chile","lat":-44.53,"lng":-72.82,"link":"https://www.worldwildlife.org/places/southern-chile"},
  {"content":"Madagascar","lat":-21.37,"lng":46.1,"link":"https://www.worldwildlife.org/places/madagascar"},
  {"content":"Arctic","lat":90.0,"lng":0.0,"link":"https://www.worldwildlife.org/places/arctic"},
  {"content":"Northern Great Plains","lat":44.06,"lng":-103.29,"link":"https://www.worldwildlife.org/places/northern-great-plains"},
  {"content":"Chihuahuan Desert","lat":28.23,"lng":-104.55,"link":"https://www.worldwildlife.org/places/chihuahuan-desert"},
  {"content":"The Galápagos","lat":-1.19,"lng":-91.19,"link":"https://www.worldwildlife.org/places/the-galapagos"},
  {"content":"Amur-Heilong","lat":48.81,"lng":128.8,"link":"https://www.worldwildlife.org/places/amur-heilong"},
  {"content":"Borneo and Sumatra","lat":-1.78,"lng":107.6,"link":"https://www.worldwildlife.org/places/borneo-and-sumatra"},
  {"content":"Mesoamerican Reef","lat":17.73,"lng":-85.61,"link":"https://www.worldwildlife.org/places/mesoamerican-reef"},
  {"content":"Namibia","lat":-22.07,"lng":14.59,"link":"https://www.worldwildlife.org/places/namibia"},
  {"content":"Eastern Himalayas","lat":27.18,"lng":90.26,"link":"https://www.worldwildlife.org/places/eastern-himalayas"},
  {"content":"Coral Triangle","lat":-2.42,"lng":134.87,"link":"https://www.worldwildlife.org/places/coral-triangle"},
  {"content":"Congo Basin","lat":-1.63,"lng":18.24,"link":"https://www.worldwildlife.org/places/congo-basin"},
  {"content":"Coastal East Africa","lat":-12.04,"lng":39.68,"link":"https://www.worldwildlife.org/places/coastal-east-africa"},
  {"content":"Greater Mekong","lat":16.17,"lng":105.25,"link":"https://www.worldwildlife.org/places/greater-mekong"},
  {"content":"Pantanal","lat":-17.7166667,"lng":-57.3833333,"link":"https://www.worldwildlife.org/places/pantanal"},
  {"content":"Atlantic Forest","lat":0.0,"lng":0.0,"link":"https://www.worldwildlife.org/places/atlantic-forest"}];
				

const MainPage = () => {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <div className="flex flex-col items-center">
      <main className="flex-1 items-center">
      <section className="w-full py-20 md:py-6">
        <div className="container flex flex-col gap-4 px-4 md:px-6 text-center">
            <div className=" flex flex-coltext-center">
              <Dashboard />
              <GraphCarbon />
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 border-t border-gray-200 dark:border-gray-800">
          <div className="container flex flex-col gap-4 px-4 md:px-6 text-center">
            <div className="space-y-2">
              <h2
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
                What is a Carbon Footprint?
              </h2>
              <p
                className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                A carbon footprint is the total amount of greenhouse gases (including carbon dioxide and methane) that
                are generated by our actions. It is a measure of the impact our activities have on the environment and
                climate change.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col gap-4 px-4 md:px-6 text-center">
            <div className="space-y-2">
              <h2
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
                Why is it important to reduce our Carbon Footprint?
              </h2>
              <p
                className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Reducing our carbon footprint is essential for mitigating climate change and its impacts. By lowering
                the amount of greenhouse gases we produce, we can help slow the rate of global warming, reduce the
                frequency and severity of extreme weather events, and protect the planet for future generations.
              </p>
            </div>
          </div>
        </section>
        <div className="bg-gray-50/90 w-full py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_600px]">
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Protecting Our Planet</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Explore the impact of human actions on our most important ecological places.
              </p>
            </div>
            <Link
              className="inline-flex items-center space-x-2 text-sm font-medium underline transition-transform translate-y-0.5 duration-150 hover:text-gray-950 dark:hover:text-gray-50"
              href="#"
            >
              Explore the Map..
              
            </Link>
          </div>        
          <img
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height="100%"
            src='mapImage.jpg'
            width="100%"
          />
            </div>
      </div>
    </div>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col gap-4 px-4 md:px-6 text-center">
            <div className="space-y-2">
              <h2
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
                Your Carbon Footprint Calculator
              </h2>
              <p
                className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                A human's estimated carbon footprint is 16 metric tons of CO2 per year.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-2">
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <Input
                  className="peer h-10 border-gray-300 shadow-sm dark:placeholder-gray-400"
                  id="email"
                  placeholder="Enter your email"
                  type="email" />
                <Button type="submit">Sign Up</Button>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Sign up to get notified when we launch.
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container flex flex-col gap-4 px-4 md:px-6 text-center">
            <div className="space-y-2">
              <h2
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
                How to Reduce your Carbon Footprint
              </h2>
              <p
                className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Here are some tips to help you reduce your carbon footprint:
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-4">
              <ol className="list-decimal list-inside space-y-2">
                <li>Use public transportation or carpooling</li>
                <li>Use sustainable clothes and organic food</li>
                <li>Reduce, reuse, and recycle</li>
                <li>Conserve water</li>
                <li>Support renewable energy</li>
              </ol>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col gap-4 px-4 md:px-6 text-center">
            <div className="space-y-2">
              <h2
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
                Benefits of Reducing your Carbon Footprint
              </h2>
              <p
                className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                By reducing your carbon footprint, you can help protect the environment, improve air quality, and
                conserve natural resources. You can also save money on energy bills and contribute to a more sustainable
                and resilient future.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col gap-4 px-4 md:px-6 text-center">
            <div className="space-y-2">
              <h2
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">Our Motivation</h2>
              <p
                className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                "I am blocked between knowledge and action. I know the importance of sustainability but I don't know what all I could do in my daily life to contribute towards it" - Maya, Florida
              </p>
              <p
                className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                “For a lot of people, it’s the hurdle of ‘it’s not really me, I can’t make a difference” - Erin
              </p>
              <p
                className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                “Show them the incentive to be sustainable” - Connie
              </p>
              <p
                className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                “Especially if it showed me how much impact it would have” - Jacob, Canada
              </p>
              <p
                className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                “when you see carbon footprint used in marketing its always very condemning. It’s nice to see something focused on action” - Jacob, Canada
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col gap-4 px-4 md:px-6 text-center">
            <div className="space-y-2">
              <h2
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
                Share with your friends
              </h2>
            </div>
            <Button>Share on Twitter</Button>
          </div>
        </section>
      </main>
      </div>
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>)
  );
}

export default MainPage;

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
