import React from "react";
import PlaceSearchOrigin from "./PlaceSearchOrigin";
import PlaceSearchDestination from "./PlaceSearchDestination";
import { supabase } from "@/lib/supabase";

export default function RequestForm(props) {
	async function FormSubmit(e) {
		e.preventDefault();
		const { data, error } = await supabase
			.from("requests")
			.insert({
				origin: `POINT(${props.searchOriginLongitude} ${props.searchOriginLatitude})`,
				destination: `POINT(${props.searchDestinationLongitude} ${props.searchDestinationLatitude})`,
			})
			.select();
		if (error) {
			console.error(error);
		} else {
			// console.log("The form has been submitted");
			// console.log(data[0].id);
			window.location.href = `/request/${data[0].id}`;
		}
	}

	return (
		<form onSubmit={FormSubmit} className="flex flex-col mt-5 mx-2">
			<PlaceSearchOrigin
				searchOriginLatitude={props.searchOriginLatitude}
				searchOriginLongitude={props.searchOriginLongitude}
				setSearchOriginLatitude={props.setSearchOriginLatitude}
				setSearchOriginLongitude={props.setSearchOriginLongitude}
			/>

			{props.searchOriginLatitude && props.searchOriginLongitude && (
				<PlaceSearchDestination
					searchDestinationLatitude={props.searchDestinationLatitude}
					searchDestinationLongitude={props.searchDestinationLongitude}
					setSearchDestinationLatitude={props.setSearchDestinationLatitude}
					setSearchDestinationLongitude={props.setSearchDestinationLongitude}
				/>
			)}

			<div className="flex justify-center items-center">
				<button
					disabled={
						props.searchOriginLatitude &&
						props.searchOriginLongitude &&
						props.searchDestinationLatitude &&
						props.searchDestinationLongitude
							? false
							: true
					}
					className="bg-blue-600 text-white font-bold my-2 px-10 py-2 rounded-2xl disabled:cursor-not-allowed"
				>
					Submit
				</button>
			</div>
		</form>
	);
}
