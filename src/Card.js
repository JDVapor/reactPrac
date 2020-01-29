import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  const styles = {
    backgroundColor: props.cardColor,
    height: props.cardHeight,
    width: props.cardWidth
  };

  return <div style={styles}></div>;
}
//prop types
Card.propTypes = {
  cardColor: PropTypes.oneOf(["red", "blue", "green", "purple"]).isRequired,
  cardWidth: PropTypes.number.isRequired,
  cardHeight: PropTypes.number
};
//default props
Card.defaultProps = {
  // cardColor: "blue",
  cardHeight: 100
  // cardWidth: 100
};

export default Card;
