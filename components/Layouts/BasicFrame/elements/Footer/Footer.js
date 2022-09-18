import Link from "next/link";
import { FOOTER_DATA } from "@/utils/appData";
import styles from "./Footer.module.scss";

export default function Footer() {
	return (
		<footer className={styles.app_footer}>
			<main className={styles.footer_container}>
				{FOOTER_DATA.map((data, index) => (
					<FooterContent key={index} {...{ data }} />
				))}
			</main>
		</footer>
	);
}

function FooterContent({ data }) {
	return (
		<section
			id={styles[`footer_${data.title}`]}
			className={styles.footer_section}
		>
			<h2>{data.title}</h2>
			<div className={styles.underline}></div>

			<section className={styles.footer_contents}>
				{data.contents.map((content, index) => (
					<section key={index} className={styles.content}>
						{content?.value && (
							<>
								<p>{content.name}</p>
								<br />
							</>
						)}
						<Link href={content.link}>
							<a target={content.link.includes("http") ? "_blank" : "_self"}>
								{content?.value ? content.value : content.name}
							</a>
						</Link>
					</section>
				))}
			</section>
		</section>
	);
}
