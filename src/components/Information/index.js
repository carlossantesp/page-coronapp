import React, { Fragment } from "react";
import Button from "../Button";
import {
  InformationTitle,
  InformationSpan,
  InformationDescription,
  InformationBtn,
} from "./InformationElements";

const Information = ({ data }) => {
  const { title, description, buttonLabel, buttonLink } = data;
  const mainTitle = title.split(" ").slice(0, -1).join(" ");
  const secundaryTitle = title.split(" ").slice(-1).join(" ");
  return (
    <Fragment>
      <InformationTitle>
        {mainTitle}
        <InformationSpan> {secundaryTitle}</InformationSpan>
      </InformationTitle>
      <InformationDescription>{description}</InformationDescription>
      <InformationBtn>
        <Button linkRef={buttonLink}>{buttonLabel}</Button>
      </InformationBtn>
    </Fragment>
  );
};

export default Information;
