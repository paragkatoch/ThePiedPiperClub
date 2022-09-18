// import "../styles/CourseCard.scss";
import Image from "next/image";
import BasicButton from "../../BasicButton";
import styles from "./moduleFrame.module.scss";

export default function ModuleFrame(props) {
	return (
		<section className={styles.module_cards}>
			{props.data.map((cardData, i) => (
				<article key={i} className={styles.module_card}>
					<section className={styles.card_data}>
						<header className={styles.card_header}>
							<p>{cardData.title}</p>
							<hr className={styles.underline} />
						</header>

						<article className={styles.card_description}>
							<p>{cardData.desc}</p>
						</article>

						<BasicButton {...cardData} />
					</section>

					<section
						className={`${styles.card_data} ${styles.card_right} ${styles.card_img}`}
					>
						<div className={styles.image_container}>
							<Image
								src={cardData.img}
								alt={cardData.alt}
								layout="responsive"
								sizes="50vw"
								priority={i === 0}
							/>
						</div>
					</section>
				</article>
			))}
		</section>
	);
}
