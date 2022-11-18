import Styles from './HomeBanner.module.scss';
import Slider from 'react-slick';
import Container from '../../PageStructure/Container/Container';
import Title from '../../Elements/Title';
import Description from '../../Elements/Description';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const HomeBanner = ({ bannerdata }) => {
    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <Slider {...sliderSettings} className={Styles.hero}>
            {bannerdata.map((banner, index) => (
                <div key={index} >
                    <div style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${banner.Image.data.attributes.url})` }} className={Styles.slide + " row pt-5 pb-5"}>
                        <div className='col align-self-center'>
                            <Container>
                                <Title>{banner.Title}</Title>
                                <div className='col-12 col-md-5'>
                                    <Description>{banner.Description}</Description>
                                </div>
                            </Container>
                        </div>
                    </div>
                </div>
            ))
            }
        </Slider >
    )
}

export default HomeBanner;