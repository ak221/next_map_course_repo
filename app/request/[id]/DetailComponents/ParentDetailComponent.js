import React from "react";
import DetailMapComponent from "./DetailMapComponent";
import { supabase } from "@/lib/supabase";

// Get single request
async function getSingleRequest(id) {
	try {
		const { data, error } = await supabase.rpc("get_request_by_id", {
			request_id: id,
		});

		if (error) {
			throw new Error(error.message);
		} else {
			return data;
		}
	} catch (error) {
		throw new Error(error.message);
	}
}

// Get drivers
async function getDrivers() {
	try {
		const { data, error } = await supabase.rpc("fetch_drivers");

		if (error) {
			throw new Error(error.message);
		} else {
			return data;
		}
	} catch (error) {
		throw new Error(error.message);
	}
}

export default async function ParentDetailComponent(props) {
	const singleRequestData = await getSingleRequest(props.requestId);
	// const driversData = await getDrivers();
	// const nearbyDrivers = await getNearbyDrivers(props.requestId, 7000);
	// console.log(nearbyDrivers);
	// console.log(nearbyDrivers.length);
	// console.log(singleRequestData);
	return (
		<DetailMapComponent
			singleRequestData={singleRequestData}
			requestId={props.requestId}
			// nearbyDrivers={nearbyDrivers}
		/>
	);
}
