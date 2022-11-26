import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyledButton,
  StyledSpan1,
  StyledSpan2,
  StyledLi,
} from './Contact.styled';

export default class Contact extends Component {
  render() {
    const { contacts, onClick } = this.props;

    return (
      <>
        {contacts.map(contact => {
          const { id, name, number } = contact;
          return (
            <StyledLi key={id}>
              <StyledSpan1 className="contact-name">{name}:</StyledSpan1>
              <StyledSpan2 className="phone-number">{number}</StyledSpan2>
              <StyledButton type="button" name={id} onClick={onClick}>
                Delete
              </StyledButton>
            </StyledLi>
          );
        })}
      </>
    );
  }
}

Contact.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
