import React from "react";
import Title from "../../Elements/Title"
import Image from "../../Elements/Image"
import Description from "../../Elements/Description"
import Section from "../../PageStructure/Container/Section"
import TitleDescription from "../../Molecule/TitleDescription/TitleDescription";
import Styles from "./Teams.module.scss"
import Container from "../../PageStructure/Container/Container";

const Teams = ({ content }) => {
  return (
    <Section className={Styles.teams + " component"}>
      <Container>
        <TitleDescription title={content.Title} description={content.Description} />
        <div className='row'>
          {content.TeamMembers.data.map((team, index) => (
            <div key={index} className={Styles.team + " col-md-2 col-lg-4 text-center"}>
              <figure>
                <Image className="rounded-circle" src={team.attributes.Image.data} />
              </figure>
              <div className={Styles.caption + " mb-4"}>
                <Title replaceclass className="mt-2 mb-3" type="h4">{team.attributes.Title}</Title>
                <div><em>{team.attributes.Role}</em></div>
                <div className={Styles.location}><b>{team.attributes.Location}</b></div>
              </div>
              <Description>{team.attributes.Description.substr(0, 80)}...</Description>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Teams;