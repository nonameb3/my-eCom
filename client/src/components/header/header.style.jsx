import style, {css} from 'styled-components';
import { Link } from 'react-router-dom';

const optionContainerStyle = css`
  padding: 10px 15px;
  cursor: pointer;
`

export const HeaderContainer = style.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`

export const LogoContainer = style(Link)`
  height: 100%;
  width: 70px;
`
export const OptionsContainer = style.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`

export const OptionLink = style(Link)`
  ${optionContainerStyle}
`

export const OptionDiv = style.div`
  ${optionContainerStyle}
`
