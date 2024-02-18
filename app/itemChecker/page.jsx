/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/kU0LFmFQ3Eb
 */
"use client"
import { Button } from "../components/ui/button"
import { Label } from "../components/ui/label"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { GraphCarbon } from "../../components/graph-carbon"
import Link from "next/link"

function itemchecker() {
  return (
    (
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
      (<header className="px-4 py-6 md:px-6">
        <h1 className="text-2xl font-bold">Product Information</h1>
      </header>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto px-4">
      <div className="flex flex-col gap-4">
        <div className="grid gap-2">
          <Label className="text-sm" htmlFor="upload">
            Upload an image
          </Label>
          <Input accept="image/*" id="upload" type="file" />
          <div>Take a photo of a product's barcode to scan it</div>
        </div>
        <div className="grid gap-2">
          OR
          <Label className="text-sm" htmlFor="manual">
            Enter barcode manually
          </Label>
          <Input id="manual" placeholder="Enter barcode" type="text" />
          <div>Type the barcode number to look up a product</div>
        </div>
      </div>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label className="text-sm">Product name</Label>
          <div>Acme Circles T-Shirt</div>
        </div>
        <div className="grid gap-2">
          <Label className="text-sm">Description</Label>
          <div>60% combed ringspun cotton/40% polyester jersey tee.</div>
        </div>
        <div className="grid gap-2">
          <Label className="text-sm">Environmental impact</Label>
          <div>
            This product is made with sustainable materials and eco-friendly dyes, reducing its carbon footprint.
          </div>
        </div>
        <div className="grid gap-2">
          <Label className="text-sm">Certifications</Label>
          <div>Organic Cotton, Fair Trade</div>
        </div>
        <div className="grid gap-2">
          <Label className="text-sm">Materials</Label>
          <div>Recycled polyester, organic cotton</div>
        </div>
      </div>
    </div>)</>)
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

export default itemchecker;
