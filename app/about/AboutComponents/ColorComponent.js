"use client";
import { useState } from "react";
export default function ColorComponent() {
	const [chosenColor, setChosenColor] = useState("green");
	function ToggleColor() {
		setChosenColor(chosenColor === "green" ? "blue" : "green");
	}
	return (
		<>
			<h1 style={{ color: chosenColor, fontSize: "2rem" }}>
				This is the about page
			</h1>
			<button onClick={ToggleColor} className="bg-black text-white">
				Change Color
			</button>
		</>
	);
}
