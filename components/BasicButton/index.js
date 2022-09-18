import Link from "next/link";
import styles from "./styles/basicButton.module.scss";

export default function BasicButton(data) {
	const https = data.url.includes("http");

	return (
		<button className={styles.card_button}>
			<Link href={data.url}>
				<a
					target={https ? "_blank" : "_self"}
					rel={https ? "noopener noreferrer" : ""}
				>
					{data.kickoff}
				</a>
			</Link>
		</button>
	);
}
