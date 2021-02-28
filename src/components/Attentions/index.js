import React from "react";
import Card from "../Card";
import {
  AttentionsContent,
  AttentionTitle,
  AttentionDescription,
  AttentionCardsWrapper,
} from "./AttentionsElements";

const Attentions = ({ attentions }) => {
  return (
    <AttentionsContent>
      <AttentionTitle>
        Cuidado de la salud <span>al alcance de tu mano</span>
      </AttentionTitle>
      <AttentionDescription>
        Llevando funciones de atención médica premium a tu alcance.
      </AttentionDescription>
      <AttentionCardsWrapper>
        {attentions.map((attention) => (
          <Card key={attention.id} info={attention} />
        ))}
      </AttentionCardsWrapper>
    </AttentionsContent>
  );
};

export default Attentions;
