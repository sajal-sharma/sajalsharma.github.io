import React from "react";

import "../../assets/css/styles.css";
import picture from "../../assets/images/la.jpg";

function Banner() {
	return (
		<div>
			<img className="banner" alt="Sajal Sharma" src={picture}></img>
			<span className="citation">
				Photo by{" "}
				<a
					className="citation-link"
					href="https://unsplash.com/@alexisbalinoff?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
				>
					Alexis Balinoff
				</a>{" "}
				on{" "}
				<a
					className="citation-link"
					href="https://unsplash.com/s/photos/los-angeles?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
				>
					Unsplash
				</a>
			</span>
		</div>
	);
}

export default Banner;
