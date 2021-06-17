import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <article
      className={classes.card}
      style={{ height: props.height + "px", width: props.width + "px" }}
    >
      <h2>{props.title}</h2>
      <div>{props.children}</div>
    </article>
  );
};

export default Card;
