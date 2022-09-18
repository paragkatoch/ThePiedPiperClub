import CourseCard from "./elements/CourseCard";
import styles from "./styles/DomainCore.module.scss";

export default function DomainCore(props) {
	return (
		<article className={styles.domain_core}>
			<p>{props.title ? props.title : props.subHeading}</p>

			<main
				className={`${props.className ? props.className : props.alt}-cards ${
					styles.cards_section
				}`}
			>
				{props.courses.map((course, i) => (
					<CourseCard key={i} {...course} />
				))}
			</main>
		</article>
	);
}
