import React from "react";
import {
  CardContent,
  CardIcon,
  CardTitle,
  CardDescription,
} from "./CardElements";
import { SvHuman, SvMedican, SvHeart } from "../../icons/services";

const Card = ({ info }) => {
  const { title, description, icon } = info;
  const iconEnable = [
    { name: "person", component: <SvHuman /> },
    { name: "medican", component: <SvMedican /> },
    { name: "heart", component: <SvHeart /> },
  ];
  return (
    <CardContent>
      <CardIcon>{iconEnable.find((i) => i.name === icon).component}</CardIcon>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  );
};

export default Card;
