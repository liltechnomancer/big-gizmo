import PropTypes from "prop-types";
import styled from "styled-components";

const chooseColor = props => {
  if (props.primary) return props.theme.primary;
  if (props.info) return props.theme.info;
  if (props.warning) return props.theme.warning;
  if (props.danger) return props.theme.danger;
  return "transparent";
};

const chooseTextColor = props => {
  if (props.primary) return "white";
  if (props.info) return "white";
  if (props.warning) return "black";
  if (props.danger) return "white";
  return "black";
};

const chooseBorder = props => {
  if (props.primary) return "none";
  if (props.info) return "none";
  if (props.warning) return "none";
  if (props.danger) return "none";
  return "1px solid black";
};

const Button = styled.button`
  background: ${props => chooseColor(props)};
  color: ${props => chooseTextColor(props)};
  border: ${props => (props.ghost ? "none" : chooseBorder(props))};
  padding: 10px;
  min-width: 100px;
  font-size: 1.25rem;
  border-radius: 4px;
  transition: all 0.25s;
  font-weight: bold;
  ${props => (props.rounded ? "border-radius: 290486px;" : "")}
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.22);
    ${props => (props.ghost ? "background: black;" : "")}
    ${props => (props.ghost ? "color: white;" : "")}
  }
`;

Button.propTypes = {
  /** The description for myProp */
  primary: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  ghost: PropTypes.bool,
  rounded: PropTypes.bool
};

export default Button;
