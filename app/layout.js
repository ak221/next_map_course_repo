import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "./RootComponents/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Ride Request App",
	description: "An app for mastering Next.JS, Supabase and the Google Maps API",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<script
					defer
					src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
				></script>
			</head>
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
