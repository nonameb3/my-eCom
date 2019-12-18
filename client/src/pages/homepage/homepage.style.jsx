import style from "styled-components";

export const HomePage = style.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 600px) {
    padding: 20px 80px;
  }
`;

export const H1 = style.h1`
  text-align: center;
`;
