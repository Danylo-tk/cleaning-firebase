"use client";

import { initFirebase } from "@/firebase/firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Login() {
  initFirebase();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  if (user) {
    router.push("/");
  }

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
  };

  return (
    <main className="relative h-full bg-acidGreen">
      <div className="frosted-glass-main absolute top-0 h-full w-full"></div>

      <h1 className="text-4xl sm:text-6xl lg:text-8xl">CLEANING APP</h1>
      <h1 className="text-4xl sm:text-6xl lg:text-8xl">/LOGIN</h1>

      <div className="absolute top-0 flex h-full w-full items-center justify-center">
        <div className="absolute z-10 flex h-56 w-72 flex-col justify-between border border-solid border-gray-400 bg-white p-2">
          {loading ? (
            <div className="flex h-full items-center justify-center">
              {/* <Loader size={48} /> */}
            </div>
          ) : (
            <>
              <div>
                <h2 className="text-xl font-bold">📚 BOOKS LIBRARY</h2>
                <div>
                  <p>* Add new books to the library</p>
                  <p>* Update/delete book information</p>
                  <p>* Set activity of a book</p>
                </div>
              </div>

              <div className="flex flex-col">
                <p className="text-2xl font-medium text-gray-600">
                  /login to continue
                </p>
                <button onClick={signIn}>
                  <div className="flex w-full items-center justify-center gap-2">
                    <Image src="" height={30} width={30} alt="Google logo" />{" "}
                    Continue with Google
                  </div>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
