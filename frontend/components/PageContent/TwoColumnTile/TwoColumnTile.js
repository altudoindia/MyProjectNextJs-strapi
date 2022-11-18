import Image from "../../../components/Elements/Image";
import Title from "../../../components/Elements/Title";
import Description from "../../../components/Elements/Description";
import Slug from "../../../components/Elements/Slug";

const TwoColumnTile = ({ twocolumntiledata }) => {
  return (
    <>
      <div key={twocolumntiledata.id} className="two-column-tile row">
          <>
            <img height="350" src={`http://localhost:1337${twocolumntiledata.BackgroundImage.data.attributes.url}`} />
            <div className="item col-lg-6 mb-4">
              <Title>{twocolumntiledata.Title1}</Title>
              <Description>{twocolumntiledata.Description1}</Description>
            </div>
            <div className="item col-lg-6 mb-4">
              <Title>{twocolumntiledata.Title2}</Title>
              <Description>{twocolumntiledata.Description2}</Description>
            </div>
          </>
      </div>
    </>
  );
};

export default TwoColumnTile;


