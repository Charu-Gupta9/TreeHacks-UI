import Image from "next/image";
import Link from "next/link"
import MainPage from "./pages/MainPage";

export default function Home() {

  return (
    <main>
      <header className="px-4 lg:px-6 h-14 flex items-center">
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
      <MainPage />
    </main>
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