import React from "react";
import Title from "../../Elements/Title";
import Description from "../../Elements/Description";
import Styles from "./TitleDescription.module.scss"
const TitleDescription = ({ title, description }) => {
    return (
        <div className="row">
            <div className={Styles.topsection + " col-12 mb-5 text-center"}>
                <Title type="h2">{title}</Title>
                <Description>{description}</Description>
            </div>
        </div>
    )
}

export default TitleDescription;