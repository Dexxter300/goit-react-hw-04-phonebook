import { Component } from 'react';
import React from 'react';
import css from './form.module.css';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = e => {
    this.setState({
      name: e.target.value,
    });
  };

  handlePhoneChange = e => {
    this.setState({
      number: e.target.value,
    });
  };

  render() {
    return (
      <>
        <form
          className={css.form}
          onSubmit={e =>
            this.props.handleSubmit(e, this.state.name, this.state.number)
          }
        >
          <label className={css.formLabel}>
            Name
            <input
              className={css.formInput}
              type="text"
              name="name"
              pattern="^^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              onChange={this.handleNameChange}
              required
            />
          </label>
          <label className={css.formLabel}>
            Phone number
            <input
              className={css.formInput}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              onChange={this.handlePhoneChange}
              required
            />
          </label>
          <button className={css.formBtn} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}
