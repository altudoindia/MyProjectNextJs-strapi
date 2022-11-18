import Styles from './InnerBanner.module.scss';
import Section from "../../PageStructure/Container/Section"
import Container from '../../PageStructure/Container/Container';
import Title from '../../Elements/Title';
import Description from '../../Elements/Description';

const InnerBanner = ({ content }) => {
    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <Section style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${content.Image.data.attributes.url})` }} className={Styles.innerbanner}>
            <div className='row'>
                <div className='col align-self-center pt-3 pb-3'>
                    <Container>
                        <div className='col col-md-8'>
                            <Title>{content.Title}</Title>
                            <Description className="fs-4">{content.Description}</Description>
                        </div>
                    </Container>
                </div>
            </div>
        </Section>
    )
}

export default InnerBanner;