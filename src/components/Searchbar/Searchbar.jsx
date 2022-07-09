import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    input: '',
  };

  handleChange = e => {
    this.setState({
      input: e.currentTarget.value.toLowerCase().trim(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { onSubmit } = this.props;
    const { input } = this.state;
    const inputEmpty = e.currentTarget.children.input.value.trim() === '';

    if (inputEmpty) {
      alert('Please enter search query');
      return;
    }
    onSubmit(input);
    this.reset(e);
  };

  reset = e => {
    e.currentTarget.reset(e);
  };

  render() {
    return (
      <header className={s.header}>
        <form className={s.form} onSubmit={this.handleSubmit}>
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
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
