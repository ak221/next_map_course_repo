import React from "react";
import ParentDetailComponent from "./DetailComponents/ParentDetailComponent";

export const metadata = {
	title: "Trip Details | Next course",
	description:
		"More information about your trip request | Connect with a driver",
};

export default function RequestDetail({ params }) {
	console.log(params);
	const requestId = params.id;
	return <ParentDetailComponent requestId={requestId} />;
}
