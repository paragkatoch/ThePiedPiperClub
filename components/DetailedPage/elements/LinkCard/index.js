import { useEffect, useState } from "react";
import { useWindowSize } from "@/utils/customHooks";

import Image from "next/image";
import Link from "next/link";
import styles from "./linkCard.module.scss";

import YoutubeLink from "../../../../public/assets/youtube_link.svg";
import WebLink from "../../../../public/assets/website_link.svg";

export default function LinkCardsContainer(props) {
	const defaultLimit = 3;

	const [showMore, setShowMore] = useState(false);
	const [limit, setLimit] = useState(defaultLimit);
	const screenSize = useWindowSize();

	useEffect(() => {
		screenSize.width <= 968 ? setLimit(2) : setLimit(3);
	}, [screenSize]);

	function showButton(i, array) {
		return showMore
			? i === array.length - 1
			: i === limit - 1 && array.length !== limit;
	}

	function showCard(i) {
		return i < limit || showMore;
	}

	return (
		<div className={styles.link_cards}>
			<div className={styles.cards_container}>
				{props.dataCards.map(
					(dataCard, i, array) =>
						showCard(i) && (
							<LinkCard key={i} {...dataCard}>
								{showButton(i, array) && (
									<ViewButton {...{ showMore, setShowMore }} />
								)}
							</LinkCard>
						)
				)}
			</div>
		</div>
	);
}

function LinkCard(props) {
	return (
		<section className={styles.link_card}>
			<Link href={props.link}>
				<a target={props.link.includes("http") ? "_blank" : "_self"}>
					<main className={styles.card_container}>
						<div className={styles.link_type}></div>

						<section className={styles.data}>
							<div className={styles.image_container}>
								<Image
									src={props.img}
									alt={props.alt}
									layout="responsive"
									sizes="20vw"
									priority="true"
								/>
							</div>
							<p>{`${props.heading.substring(0, 18)}${
								props.heading.length > 18 ? ".." : ""
							}`}</p>
						</section>

						<div className={styles.link_type}>
							{props.type && <ImageContainer {...props} />}
						</div>
					</main>
				</a>
			</Link>
			{props.children}
		</section>
	);
}

function ImageContainer(props) {
	return (
		<div className={styles.image_container}>
			<Image
				src={props.type === "youtube" ? YoutubeLink : WebLink}
				alt="youtube"
				sizes="10vw"
				layout="responsive"
			/>
		</div>
	);
}

function ViewButton({ showMore, setShowMore }) {
	const onButtonClick = () => {
		setShowMore((prev) => !prev);
	};

	return (
		<div className={styles.view_element}>
			<button className={styles.view_button} onClick={onButtonClick}>
				{showMore ? "view less..." : "view more..."}
			</button>
		</div>
	);
}
