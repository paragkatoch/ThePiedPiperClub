import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import styles from "./resourceCard.module.scss";
import BasicButton from "../../../BasicButton";

export default function ResourceCard(props) {
	const asPath = useRouter().asPath.split("#")[0];

	return (
		<section className={styles.resource_card}>
			<main className={styles.card_container}>
				<header id={props.alt} className={styles.card_header}>
					<Link href={`${asPath}#${props.alt}`}>
						<a>
							{props.img && <ImageContainer {...props} />}
							{props.heading && <h2>{props.heading}</h2>}
							{props.subHeading && <h3>{props.subHeading}</h3>}
						</a>
					</Link>
				</header>

				<main className={styles.card_body}>
					{props.description && <CardDescription {...props} />}

					{props.nextAlt ? (
						<BasicButton
							kickoff={props.kickoff ?? "Let's Go"}
							url={`${asPath}#${props.nextAlt}`}
						/>
					) : (
						props.children
					)}
				</main>
			</main>
		</section>
	);
}

function CardDescription(props) {
	return (
		<div className={styles.description}>
			<p>{props.description}</p>
		</div>
	);
}

function ImageContainer(props) {
	return (
		<div
			className={`${styles.image_container}
				${props.subHeading ? styles.small_image : ""}`}
		>
			<Image
				src={props.img}
				alt={props.alt}
				layout="responsive"
				sizes="20vw"
				priority="true"
			/>
		</div>
	);
}
