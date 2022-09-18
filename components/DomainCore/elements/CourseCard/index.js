import Link from "next/link";
import Image from "next/image";

import styles from "./CourseCard.module.scss";

export default function CourseCard(props) {
	return (
		<section
			className={`${styles.course_card} ${
				props?.disabled ? styles.disabled : ""
			}`}
		>
			<Link href={props.link}>
				<a target={props.link.includes("http") ? "_blank" : "_self"}>
					<div className={styles.image_container}>
						<Image
							src={props.img}
							alt={props.alt}
							layout="responsive"
							sizes="10vw"
							priority="true"
						/>
					</div>
					<p>{props.title}</p>
					<div className={styles.balancer}></div>
				</a>
			</Link>
		</section>
	);
}
