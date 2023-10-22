"use client";

import Link from "next/link";
export default async function Home() {
  return (
    <>
      <Link href="/userpage/dev" className="underline">
        Home
      </Link>
    </>
  );
}
