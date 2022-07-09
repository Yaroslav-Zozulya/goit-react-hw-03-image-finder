import PropTypes from 'prop-types';
import s from './Button.module.css';

export const Button = ({ loadMode }) => {
  return (
    <button type="button" className={s.button} onClick={loadMode}>
      Load more
    </button>
  );
};

Button.propTypes = { loadMode: PropTypes.func.isRequired };
