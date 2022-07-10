import PropTypes from 'prop-types';

import s from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const inputValue = e.currentTarget.children.input.value.trim();

    if (inputValue === '') {
      alert('Please enter search query');
      return;
    }
    onSubmit(e.currentTarget.children.input.value.trim());
  };

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <button type="submit" className={s.button}>
          <span className={s.buttonLabel}>Search</span>
        </button>

        <input
          className={s.input}
          type="text"
          name="input"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
