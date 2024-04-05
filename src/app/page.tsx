"use client";

import { initFirebase } from "@/firebase/firebase";
import { getAuth } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  initFirebase();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const [rooms, setRooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const router = useRouter();

  const onOrder = () => {
    if (user) {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  };

  return (
    <main>
      <header className="flex h-14 items-center px-4 lg:px-6">
        <span className="text-2xl font-medium text-acidGreen">Cleaning</span>

        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>

      <section className="w-full py-6 md:py-12 lg:py-24 xl:py-32">
        <div className="container flex flex-col items-center justify-center space-y-4 px-4 text-center md:px-6 lg:space-y-10">
          <div className="flex flex-col items-center space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Your Home. Sparkling Clean.
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Book professional cleaners with the tap of a button. Easy
              scheduling. Trusted service. Eco-friendly products.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2"></div>
        </div>
      </section>

      <section className="frosted-glass">
        <div className="flex h-28">
          <div className="flex w-full">
            <div className="m-4 flex w-1/2 items-center justify-around border-r-2 border-gray-400 text-2xl font-medium">
              <span
                onClick={() => setRooms(rooms - 1)}
                className="flex h-10 w-10 cursor-pointer justify-center"
              >
                -
              </span>
              {rooms} rooms
              <span
                onClick={() => setRooms(rooms + 1)}
                className="flex h-10 w-10 cursor-pointer justify-center"
              >
                +
              </span>
            </div>
            <div className="flex w-1/2 items-center justify-around text-2xl font-medium">
              <span
                onClick={() => setBathrooms(bathrooms - 1)}
                className="flex h-10 w-10 cursor-pointer justify-center"
              >
                -
              </span>
              {bathrooms} bathrooms
              <span
                onClick={() => setBathrooms(bathrooms + 1)}
                className="flex h-10 w-10 cursor-pointer justify-center"
              >
                +
              </span>
            </div>
          </div>
          <div className="p-2">
            <button
              onClick={onOrder}
              className="h-full w-60 rounded-lg bg-acidGreen text-2xl font-medium hover:border-2 hover:border-gray-400"
            >
              Order
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

{
  /* <main>
      <h1>Main page</h1>
      <Link href="/login" className="border border-blue-400">
        Go to login
      </Link>
    </main> */
}
