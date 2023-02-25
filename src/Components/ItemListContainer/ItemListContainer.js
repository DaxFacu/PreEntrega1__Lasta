import styles from "./ItemListContainer.module.css";
const ItemListContainer = ({ greetings }) => {
  return (
    <div>
      <h2 className={styles.textH2}>{greetings}</h2>
    </div>
  );
};

export default ItemListContainer;
