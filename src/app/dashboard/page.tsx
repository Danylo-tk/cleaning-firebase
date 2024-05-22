"use client";

import Image from "next/image";
import discountImg from "../../../public/3d-discount-tag-png.webp";
import { Button } from "@/components/Button";
import { initFirebase } from "@/firebase/firebase";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Dashboard() {
  initFirebase();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  if (user?.email === "danylo.tkach@gmail.com") {
    return (
      <main className="flex w-full flex-col gap-4 p-4">
        <div className="text-2xl">Special Offers</div>
        <div className="border-b border-acidGreen"></div>
        <div className="flex gap-4">
          <div className="frosted-glass relative flex h-36 w-96 flex-col rounded-sm p-4 hover:border hover:border-acidGreen">
            <div className="absolute left-64 top-5 -z-10">
              <Image src={discountImg} height={100} width={100} alt="img" />
            </div>

            <div className="text-2xl font-bold">Get 30% off</div>
            <div className="mt-8 text-gray-600">
              Get discount for every order
            </div>
          </div>

          <div className="frosted-glass flex h-36 w-64 flex-col rounded-sm p-4 hover:border hover:border-acidGreen">
            <div className="text-2xl font-bold">Save 10% weekly!</div>
            <div className="mt-8 text-gray-600">
              Discount for regular ordering and save up to 10% weekly!
            </div>
          </div>
        </div>

        <div className="mt-10 text-2xl">Categories</div>
        <div className="border-b border-acidGreen"></div>
        <div className="flex flex-wrap gap-2">
          {[
            "Apartment Cleaning",
            "House Cleaning",
            "Window Cleaning",
            "Office Cleaning",
            "Kitchen Cleaning",
            "Renovation",
            "Ironing",
          ].map((item: string, index) => (
            <div
              key={index}
              className="flex h-16 cursor-pointer items-center border border-acidGreen p-2 px-4 text-lg font-semibold hover:bg-acidGreen"
            >
              {item}
            </div>
          ))}
          <div className="flex h-16 cursor-pointer items-center p-2 px-4 text-lg font-semibold underline">
            View More
          </div>
        </div>

        <div className="mt-10 text-2xl">Upcoming Events</div>
        <div className="border-b border-acidGreen"></div>
        <div>
          <div className="relative box-border flex flex-col justify-between border-b border-l-0 border-r-0 border-t-0 border-solid border-black px-5 py-4 sm:py-10">
            <div>
              <div className="flex flex-col sm:flex-row sm:gap-14">
                <span className="text-xs text-gray-400">
                  1 August 2024 · 2PM
                </span>
              </div>
            </div>

            <div className="h-4 sm:h-14"></div>

            <div className="relative">
              <p className="text-md sm:text-xl"></p>
              <h2 className="text-3xl font-bold sm:text-5xl">
                Kitchen Cleaning
              </h2>
            </div>

            <div className="h-4"></div>

            <div className="flex flex-col items-center justify-between sm:flex-row">
              <p className="text-xl text-gray-400">
                <span className="font-bold">Created:</span> Danylo Tkach
              </p>

              <div className="flex gap-5">
                <Button>Deactivate</Button>

                <Button>Details</Button>
              </div>
            </div>
          </div>

          <div className="relative box-border flex flex-col justify-between border-b border-l-0 border-r-0 border-t-0 border-solid border-black px-5 py-4 sm:py-10">
            <div>
              <div className="flex flex-col sm:flex-row sm:gap-14">
                <span className="text-xs text-gray-400">
                  1 August 2024 · 2PM
                </span>
              </div>
            </div>

            <div className="h-4 sm:h-14"></div>

            <div className="relative">
              <p className="text-md sm:text-xl"></p>
              <h2 className="text-3xl font-bold sm:text-5xl">
                Apartment Cleaning
              </h2>
            </div>

            <div className="h-4"></div>

            <div className="flex flex-col items-center justify-between sm:flex-row">
              <p className="text-xl text-gray-400">
                <span className="font-bold">Created:</span> Danylo Tkach
              </p>

              <div className="flex gap-5">
                <Button>Deactivate</Button>

                <Button>Details</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <main className="flex w-full flex-col gap-4 p-4">
        <div className="text-2xl">Active Jobs</div>
        <div className="border-b border-acidGreen"></div>
        <div className="flex gap-2">
          <div className="frosted-glass flex w-96 flex-col rounded-sm p-4">
            <div>Danylo Tkach · 093 123 4321</div>
            <div className="text-gray-500">2 August 2024 · 2PM</div>
            <div className="mt-4 text-2xl font-bold">Apartment Cleaning</div>
            <div className="mb-2 text-gray-600">Lviv, Lvivska St, 12</div>

            <Button>Details</Button>
          </div>
        </div>

        <div className="text-2xl">Offers</div>
        <div className="border-b border-acidGreen"></div>
        <div>
          <div className="relative box-border flex flex-col justify-between border-b border-l-0 border-r-0 border-t-0 border-solid border-black px-5 py-4 sm:py-10">
            <div>
              <div className="flex flex-col sm:flex-row sm:gap-14">
                <span className="text-xs text-gray-400">
                  10 August 2024 · 2PM
                </span>
              </div>
            </div>

            <div className="h-4 sm:h-14"></div>

            <div className="relative">
              <p className="text-md sm:text-xl"></p>
              <h2 className="text-3xl font-bold sm:text-5xl">House Cleaning</h2>
            </div>

            <div className="h-4"></div>

            <div className="flex flex-col items-center justify-between sm:flex-row">
              <p className="text-xl text-gray-400">
                <span className="font-bold">Created:</span> Danylo Tkach
              </p>

              <div className="flex gap-5">
                <Button>Details</Button>
                <Button>Join</Button>
              </div>
            </div>
          </div>

          <div className="relative box-border flex flex-col justify-between border-b border-l-0 border-r-0 border-t-0 border-solid border-black px-5 py-4 sm:py-10">
            <div>
              <div className="flex flex-col sm:flex-row sm:gap-14">
                <span className="text-xs text-gray-400">
                  1 August 2024 · 2PM
                </span>
              </div>
            </div>

            <div className="h-4 sm:h-14"></div>

            <div className="relative">
              <p className="text-md sm:text-xl"></p>
              <h2 className="text-3xl font-bold sm:text-5xl">
                Apartment Cleaning
              </h2>
            </div>

            <div className="h-4"></div>

            <div className="flex flex-col items-center justify-between sm:flex-row">
              <p className="text-xl text-gray-400">
                <span className="font-bold">Created:</span> Danylo Tkach
              </p>

              <div className="flex gap-5">
                <Button>Details</Button>
                <Button>Join</Button>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </main>
    );
  }
}
