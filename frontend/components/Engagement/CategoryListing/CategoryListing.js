import Title from "../../Elements/Title";
import Container from "../../PageStructure/Container/Container";
import Link from "next/link";
import Styles from "./CategoryListing.module.scss";

const CategoryListing = ({ content }) => {
  return (
    <section className={Styles.categoryListing}>
      <Container>
        <Title type="h4">Categories</Title>
        <ul>
          {content.map((category) => (
            <Link href="/">
              <li key={category.id}>
                <a href="#">{category.Title}</a>
              </li>
            </Link>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default CategoryListing;
