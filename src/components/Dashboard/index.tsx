"use client";

import { initFirebase } from "@/firebase/firebase";
import Icon from "../Icon";
import MainListItems from "./listItems";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from "next/image";

type DashboardProps = {
  children: React.ReactNode;
};

const DashboardWrapper = ({ children }: DashboardProps) => {
  initFirebase();
  const auth = getAuth();
  const [user, userLoading] = useAuthState(auth);

  return (
    <div className="flex h-full justify-center">
      <div className="box-border w-full max-w-screen-xl">
        <div className="flex h-full">
          <main className="order-2 w-full">{children}</main>

          <div className="order-1 h-full border-r border-r-slate-200">
            <section className="sticky top-16 min-w-72">
              <div className="mb-2 mr-2 flex h-16 cursor-pointer items-center justify-between border border-white px-4 hover:rounded-full hover:border hover:border-acidGreen">
                <div className="flex gap-2">
                  <div className="h-12 w-12 rounded-full bg-gray-200">
                    <Image
                      src={user?.photoURL || ""}
                      width={48}
                      height={48}
                      className="rounded-full"
                      alt="profile photo"
                    />
                  </div>

                  {userLoading ? (
                    <div>Loading</div>
                  ) : (
                    <div className="flex flex-col">
                      <span>{user?.displayName}</span>
                      <span>{user?.email}</span>
                    </div>
                  )}
                </div>

                <Icon name="moreVert" />
              </div>

              <MainListItems />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardWrapper;
