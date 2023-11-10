import React from "react";
import Link from "next/link";

export default function Header() {
	return (
		<nav className="flex justify-around items-center bg-black h-14 text-white">
			<Link href="/">Home</Link>
			<Link href="/request">Trip Request</Link>
			<Link href="/login">Login</Link>
		</nav>
	);
}
