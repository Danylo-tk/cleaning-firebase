import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/login" className="border border-blue-400">
        Go to login
      </Link>
    </main>
  );
}
