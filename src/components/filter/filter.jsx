import css from './filter.module.css';

export const Filter = ({ handleFilter }) => {
  return (
    <div className={css.filter}>
      <label className={css.filterLabel}>
        Find contact by name
        <input
          className={css.filterInput}
          type="text"
          name="filter"
          pattern="^^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="find contact"
          onChange={handleFilter}
        />
      </label>
    </div>
  );
};
