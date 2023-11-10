import React from "react";

export default function StarRating({ rating }) {
	const fullStars = Math.floor(rating);
	const halfStars = rating - fullStars >= 0.5 ? 1 : 0;
	const emptyStars = 5 - fullStars - halfStars;

	const starIcons = [];

	// case1
	for (let i = 0; i < fullStars; i++) {
		starIcons.push(
			<span key={i} className="text-yellow-500">
				&#9733;
			</span>
		);
	}

	// case2
	if (halfStars) {
		starIcons.push(
			<span key="key" className="text-yellow-500">
				&#9733;
			</span>
		);
	}

	// case3
	for (let i = 0; i < emptyStars; i++) {
		starIcons.push(
			<span key={`${i}--empty`} className="text-gray-500">
				&#9733;
			</span>
		);
	}

	return <div>{starIcons}</div>;
}
