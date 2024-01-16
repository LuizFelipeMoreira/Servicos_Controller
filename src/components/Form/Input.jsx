import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Theme from '../../Theme';

const Inputs = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  outline: none;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: ${Theme.font.font2};
  background: ${Theme.colors.white};
  border-radius: 5px;
  border: 1px solid black;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 2px #c4c4c4;
  }
`;

const Input = ({
  type,
  id,
  name,
  label,
  width,
  classe,
  data,
  setValue,
  value,
}) => {
  function handleChange({ target }) {}

  return (
    <div className={classe}>
      <label htmlFor={id}>{label}</label>
      {value}
      <Inputs
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  width: PropTypes.number,
  classe: PropTypes.string,
  data: PropTypes.object,
  setValue: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
