import styles from "./style.module.css";
import PropTypes from "prop-types";

const SortSelctor = ({ orderBy, handleSortOrderChange, getTodos }) => {


  return (
    <div className={styles.formGroup}>
      <label htmlFor="sortOrder" className={styles.label}>
        Sort By:
      </label>
      <select
        id="sortOrder"
        value={orderBy}
        onChange={(event) => handleSortOrderChange(event.target.value)}
        className={styles.select} // Use the CSS class from the styles object
      >
        <option value="priorty">Priorty</option>
        <option value="done">Done</option>
        <option value="notdone">Not Done</option>
      </select>
    </div>
  );
};

export default SortSelctor;

SortSelctor.prototype = {
  orderBy: PropTypes.string,
  handleSortOrderChange: PropTypes.func,
  getTodos: PropTypes.func,
};
