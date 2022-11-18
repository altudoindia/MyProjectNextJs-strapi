import Styles from "./Assets.module.scss";
import Container from "../../PageStructure/Container/Container";
import Title from "../../Elements/Title";
import Description from "../../Elements/Description";
import Slug from "../../Elements/Slug";

const Assets = ({ assetsData }) => {
  return (
    <section className="p-5" style={Styles}>
      <Container>
        {assetsData.map((Asset) => (
          <div
            key={Asset.id}
            className={Styles.slide + "d-flex align-items-center pt-5 pb-5"}
          >
            <Title>{Asset.Title}</Title>
            <Description>{Asset.Description}</Description>
            <Slug size="large" type="button">
              {Asset.LinkText}
            </Slug>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Assets;
