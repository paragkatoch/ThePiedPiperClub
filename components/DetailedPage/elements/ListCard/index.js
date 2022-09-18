import { useState } from "react";
import Image from "next/image";
import { useClassName } from "@/utils/customHooks";

import styles from "./listCard.module.scss";
import Arrow from "../../../../public/assets/developer/arrow.svg";

export default function ListCardContainer(props) {
	return (
		<div className={styles.list_cards}>
			<div className={styles.list_container}>
				{props.data.map((listData, i) => (
					<ListCard key={i} {...listData} />
				))}
			</div>
		</div>
	);
}

function ListCard({ title, description }) {
	const [showBody, setShowBody] = useState(false);
	const [buttonStyle, setButtonStyle] = useClassName({
		closed: styles.closed,
	});
	const [bodyStyle, setBodyStyle] = useClassName({
		hidden: styles.hidden,
		list_body: styles.list_body,
	});

	function onButtonClick() {
		setShowBody((prev) => !prev);
		setButtonStyle("toggle", "closed", styles.closed);

		setTimeout(() => {
			setBodyStyle("toggle", "hidden", styles.hidden);
		}, 100);
	}
	return (
		<main className={styles.list_card}>
			<button className={buttonStyle} onClick={onButtonClick}>
				<header className={styles.list_header}>
					<div className={styles.image_container}>
						<Image src={Arrow} alt="arrow" layout="responsive" />
					</div>

					<h3>{title}</h3>
				</header>
			</button>

			{showBody && (
				<main className={bodyStyle}>
					<div className={styles.container}>
						<p>{description}</p>
					</div>
				</main>
			)}
		</main>
	);
}
