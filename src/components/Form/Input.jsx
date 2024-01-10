import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Inputs = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  outline: none;
  background: #fff;
  border-radius: 5px;
  border: 1px solid black;
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
  return (
    <div className={classe}>
      <label htmlFor={id}>{label}</label>
      {value}
      <Inputs
        type={type}
        id={id}
        name={name}
        sett
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
