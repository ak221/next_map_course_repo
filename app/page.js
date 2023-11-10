import Image from "next/image";
import FetchComponentClient from "./FetchComponentClient";
import FetchComponentServer from "./FetchComponentServer";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex justify-center items-center h-80">
			<Link
				href="/request"
				className="bg-blue-600 px-6 py-2 text-white font-bold rounded-2xl"
			>
				Make a trip request
			</Link>
		</main>
	);
}
