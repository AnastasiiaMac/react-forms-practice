import css from "./Description.module.css";
const Description = () => {
  return (
    <div className={css.descriptionWrapper}>
      <h1 className={css.header}>Sip Happens Café</h1>
      <p>☕☕☕</p>
      <p className={css.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};
export default Description;
