//  начинается императивный стиль
import logo from "./logo.svg";
import "./App.css";
import { createElement } from "react";

export const App = () => {
	let currentYear = new Date().getFullYear();
	return (
		//  начинается декларативный стиль
		createElement(
			"div",
			{
				className: "App",
			},
			createElement(
				"header",
				{
					className: "App-header",
				},
				createElement("img", {
					src: logo,
					className: "App-logo",
					alt: "logo",
				}),
				createElement(
					"p",
					null,
					"Edit ",
					createElement("code", null, "src/App.js"),
					" and save to reload. Very cool!",
				),
				createElement(
					"a",
					{
						className: "App-link",
						href: "https://reactjs.org",
						target: "_blank",
						rel: "noopener noreferrer",
					},
					"Learn React",
				),
				createElement("p", null, " ", currentYear, " "),
			),
		)
	);
};
