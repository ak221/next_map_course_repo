"use client";
import React from "react";
import RequestForm from "./RequestForm";
import MapComponent from "./MapComponent";
import { useState } from "react";

export default function ParentRequestComponent() {
	const [searchOriginLatitude, setSearchOriginLatitude] = useState(null);
	const [searchOriginLongitude, setSearchOriginLongitude] = useState(null);
	const [searchDestinationLatitude, setSearchDestinationLatitude] =
		useState(null);
	const [searchDestinationLongitude, setSearchDestinationLongitude] =
		useState(null);
	return (
		<div className="flex">
			<div className="w-1/5">
				<RequestForm
					searchOriginLatitude={searchOriginLatitude}
					searchOriginLongitude={searchOriginLongitude}
					setSearchOriginLatitude={setSearchOriginLatitude}
					setSearchOriginLongitude={setSearchOriginLongitude}
					searchDestinationLatitude={searchDestinationLatitude}
					searchDestinationLongitude={searchDestinationLongitude}
					setSearchDestinationLatitude={setSearchDestinationLatitude}
					setSearchDestinationLongitude={setSearchDestinationLongitude}
				/>
			</div>
			<div className="w-4/5">
				<MapComponent
					searchOriginLatitude={searchOriginLatitude}
					searchOriginLongitude={searchOriginLongitude}
					setSearchOriginLatitude={setSearchOriginLatitude}
					setSearchOriginLongitude={setSearchOriginLongitude}
					searchDestinationLatitude={searchDestinationLatitude}
					searchDestinationLongitude={searchDestinationLongitude}
					setSearchDestinationLatitude={setSearchDestinationLatitude}
					setSearchDestinationLongitude={setSearchDestinationLongitude}
				/>
			</div>
		</div>
	);
}
