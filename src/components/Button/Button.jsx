import s from './Button.module.css';

export const Button = ({ loadMode }) => {
  return (
    <button type="button" className={s.button} onClick={loadMode}>
      Load more
    </button>
  );
};
