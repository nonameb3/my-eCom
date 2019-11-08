import style, { css } from "styled-components";



const GoogleButtonStyle = css`
  background-color: rgba(0, 174, 255, 0.76);
  color: white;
  border: none;

  &:hover {
    background-color: rgb(63, 168, 230);
    border: none;
  }
`;

const InvertedStyle = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const ButtonStyle = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const getButtonStyle = ({ googleSignInButton, inverted }) => {
  if (googleSignInButton) {
    return GoogleButtonStyle;
  }

  if (inverted) {
    return InvertedStyle;
  }

  return ButtonStyle;
};

export const CustomeButtonContainer = style.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: auto;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyle}
`;