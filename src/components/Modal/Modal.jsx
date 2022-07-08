import s from './Modal.module.css';

export const Modal = ({ url, alt, close }) => {
  window.addEventListener('keydown', e => test(e));

  function test(e) {
    console.log(e.key);
    if (e.key === 'Escape') {
      close(e);
    }
  }
  return (
    <div className={s.Overlay} onClick={e => close(e)}>
      <div>
        <img src={url} alt={alt} className={s.Modal} />
      </div>
    </div>
  );
};
