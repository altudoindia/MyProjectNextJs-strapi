import Title from '../../Elements/Title';
import Description from '../../Elements/Description';
import Styles from './ContentTile.module.scss'
import Container from '../../PageStructure/Container/Container';
import Slug from '../../Elements/Slug';

const ContentTile = ({ content }) => {
    return (
        <section className='p-5'>
            <Container>
                <Description>{content.Description}</Description>
            </Container>
        </section>
    )
}

export default ContentTile;