import Styles from './RichText.module.scss';
import Container from '../../PageStructure/Container/Container';
import Description from '../../Elements/Description';
import Title from '../../Elements/Title';
const RichText = ({ richtextdata }) => {
    return (
        <div className={Styles.richtext}>
            {/* Rich Text Content */}
            <div className="col-12">
                <Container>
                    <Title type="h1" className='mb-1'>{richtextdata.Tite}</Title>
                    <Title type="h3" className='mb-3'>{richtextdata.SubTitle}</Title>
                    <Description className="mb-3">{richtextdata.Description}</Description>
                </Container>

            </div>
        </div>
    )


}

export default RichText;