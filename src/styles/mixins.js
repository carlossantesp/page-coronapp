import { css } from "styled-components";

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexColumn: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  gridColumn2: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  `,
  gridColumn3: css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
  `,
  boton: css`
    border: none;
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
    padding: 1rem 2rem;
    border-radius: 0.25rem;
    background-color: #ccc;
    transition: all 0.5s;
    text-transform: uppercase;
  `,
};

export default mixins;
