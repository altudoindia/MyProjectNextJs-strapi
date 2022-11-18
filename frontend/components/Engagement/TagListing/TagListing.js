import Title from "../../Elements/Title";
import Container from "../../PageStructure/Container/Container";
import Link from "next/link";
import Styles from "./CategoryListing.module.scss";

const TagListing = ({ content }) => {
  return (
    <section className={Styles.tagListing}>
      <Container>
        <Title type="h4">Tags</Title>
        <ul>
          {content.map((tag) => (
            <Link href="/">
              <li key={tag.id}>
                <a href="#">{tag.Title}</a>
              </li>
            </Link>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default TagListing;
