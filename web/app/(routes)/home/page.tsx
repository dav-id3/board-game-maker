"use client";

import Link from "next/link";

export default async function Home() {    
    return (
        <>
        <Link href="/userpage/testid" className="underline">
        Home
        </Link>
        </>
    )
};