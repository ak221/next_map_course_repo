import React from "react";
import ParentRequestComponent from "./RequestComponents/ParentRequestComponent";

export const metadata = {
	title: "Trip Request | Next course",
	description: "Make a trip request to go anywhere in London",
};

export default function RequestPage() {
	return <ParentRequestComponent />;
}
