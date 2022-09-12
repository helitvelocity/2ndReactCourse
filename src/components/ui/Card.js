import classes from "./Card.module.css";

function Card(props) {
  return <div classname={classes.card}>{props.children}</div>;
}

export default Card;
