import { useEffect, useState } from "react";

export function useWindowSize() {
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowSize;
}

/**
 *
 * @param {Array} classes object with elements as identifier:style
 * @returns
 */
export function useClassName(props) {
	const [classNames, setClassNames] = useState(props);

	function addClassName(identifier, style) {
		setClassNames((prev) => ({ ...prev, [identifier]: style }));
	}
	function removeClassName(identifier) {
		setClassNames((prev) => {
			const { [identifier]: value, ...rest } = prev;
			return rest;
		});
	}

	/**
	 * changeClassNames
	 * @param @requires {String} type action type ['remove','add','toggle]
	 * @param {String} identifier name for the style
	 * @param {Object{}} style module style
	 */
	function changeClassNames(type, identifier, style = {}) {
		switch (type) {
			case "toggle":
				classNames?.[identifier]
					? removeClassName(identifier)
					: addClassName(identifier, style);

				break;

			case "add":
				!classNames?.[identifier]
					? addClassName(identifier, style)
					: console.warn(
							`identifier ${identifier} doesn't exist || remove-useClassName`,
							classNames
					  );

				break;

			case "remove":
				classNames?.[identifier]
					? removeClassName(identifier)
					: console.warn(
							`identifier ${identifier} doesn't exist || remove-useClassName`,
							classNames
					  );

				break;

			default:
				console.warn(`invalid type ${type} supplied || useClassName`);
				break;
		}
	}

	return [
		Object.keys(classNames)
			.map((identifier) => classNames[identifier])
			.join(" "),
		changeClassNames,
	];
}
