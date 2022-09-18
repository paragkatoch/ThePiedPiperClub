import ResourceCard from "./elements/ResourceCard";
import LinkCard from "./elements/LinkCard";

import styles from "./styles/DetailedPage.module.scss";
import courseStyles from "../DomainCore/styles/DomainCore.module.scss";
import ListCard from "./elements/ListCard";

import CourseCard from "../DomainCore/elements/CourseCard";
import BasicButton from "../BasicButton";

export default function DetailedPage(props) {
	let PageType;

	if (props.pageType === "card-type") PageType = CardType;
	else if (props.pageType === "list-type") PageType = ListType;
	else if (props.pageType === "link-card-type") PageType = LinkCardType;
	else if (props.pageType === "list-button-type") PageType = ListButtonType;
	else throw new Error("invalid page type");

	return <PageType {...props} />;
}

function CardType(props) {
	return (
		<main className={styles.detailed_page}>
			{props.data.map((card, i) => (
				<ResourceCard key={i} {...card}>
					{card.dataCards && <LinkCard key={i} dataCards={card.dataCards} />}
				</ResourceCard>
			))}
		</main>
	);
}

function ListType(props) {
	return (
		<main className={styles.detailed_page}>
			{props.data.map((list, i) => (
				<ResourceCard key={i} {...list}>
					{list.children && <ListCard key={i} data={list.children} />}
				</ResourceCard>
			))}
		</main>
	);
}

function LinkCardType(props) {
	return (
		<main className={styles.detailed_page}>
			{props.data.map((card, i) => (
				<ResourceCard key={i} {...card}>
					{card.contents && (
						<article
							className={`${courseStyles.domain_core} ${styles.link_card}`}
						>
							<main
								className={`${courseStyles.cards_section} ${styles.link_card_items}`}
							>
								{card.contents.map((course, i) => (
									<CourseCard key={i} {...course} />
								))}
							</main>
						</article>
					)}
				</ResourceCard>
			))}
		</main>
	);
}

function ListButtonType(props) {
	return (
		<main className={styles.detailed_page}>
			{props.data.map((card, i) => (
				<ResourceCard key={i} {...card}>
					{card.link && (
						<BasicButton kickoff={card.kickOff ?? "Let's Go"} url={card.link} />
					)}
				</ResourceCard>
			))}
		</main>
	);
}
