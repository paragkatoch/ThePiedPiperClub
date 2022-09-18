import Image from "next/image";
import Head from "next/head";

import BasicFrame from "@/components/Layouts/BasicFrame";
import styles from "./styles/ContactComponent.module.scss";

import AP from "@/assets/ap_contact.png";
import PK from "@/assets/pk_contact.png";
import UT from "@/assets/ut_contact.png";
import BasicButton from "@/components/BasicButton";

const cardsData = [
	{
		text: "Abraham Philip",
		src: AP,
		alt: "Abraham Philip",
		link: "https://twitter.com/abrahamvphilip",
	},
	{
		text: "Parag Katoch",
		src: PK,
		alt: "Parag Katoch",
		link: "https://github.com/preIdiot",
	},
	{
		text: "Umair Tariq",
		src: UT,
		alt: "Umair Tariq",
		link: "https://github.com/bingJunior",
	},
];

export default function Contact(props) {
	return (
		<BasicFrame>
			<Head>
				<title>Contact Us</title>
				<meta
					name="description"
					content="Would you like to help us extend this effort and reach out to even more people in need? Get in touch and help us make this dream come true."
				/>
			</Head>

			<ContactComponent />
		</BasicFrame>
	);
}

function ContactComponent(props) {
	return (
		<main className={styles.contact_us}>
			<section className={`${styles.whoweare} ${styles.contact_section}`}>
				<header className={`${styles.header} ${styles.section_headers}`}>
					<p>Who are we?</p>
					<hr className={styles.underline} />
				</header>

				<main className={styles.contact_cards}>
					<div className={styles.cards_container}>
						{cardsData.map((cardInfo, i) => (
							<section key={i} className={styles.card}>
								<a
									href={cardInfo.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									<main className={styles.card_container}>
										<div className={styles.image_container}>
											<Image
												src={cardInfo.src}
												alt={cardInfo.alt}
												layout="responsive"
												sizes="10vw"
												priority={true}
											/>
										</div>

										<p>{cardInfo.text}</p>
									</main>
								</a>
							</section>
						))}
					</div>
				</main>
			</section>

			<section
				className={`${styles.contact_contribute} ${styles.contact_section}`}
			>
				<header className={styles.header}>
					<p>Want to contribute?</p>
					<hr className={styles.underline} />
				</header>

				<main className={styles.main}>
					<p>
						Want to help other Dev’s get better? Join us in the battle of
						providing best world class resources for free. Sound’s like
						something you would be interested in?
					</p>
				</main>

				<BasicButton
					kickoff="Count me in!"
					url="https://github.com/paragkatoch/ThePiedPiperClub"
				/>
			</section>

			{/* <section className={`${styles.contact_credit} ${styles.contact_section}`}>
				<header className={styles.header}>
					<p>Credit where it’s due</p>
					<hr className={styles.underline} />
				</header>

				<main className={styles.main}>
					<p>
						It&apos;s time to thank the heroes who made this project possible
						with their world-class resources.
					</p>
				</main>

				<BasicButton kickoff="Thank them!" url="/contact/contribute" />
			</section> */}

			<section className={`${styles.made_by} ${styles.contact_section}`}>
				<p>
					Made with <span>❤</span> by Team Pied Piper
				</p>
			</section>
		</main>
	);
}
