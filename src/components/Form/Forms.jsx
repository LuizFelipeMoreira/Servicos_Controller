import React from 'react';
import styled from 'styled-components';

export const Inputs = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  outline: none;
  background: #fff;
  border-radius: 5px;
  border: 1px solid black;
`;

export const Input = ({ type, id, name, label, width, classe }) => {
  return (
    <div className={classe}>
      <label htmlFor={id}>{label}</label>
      <Inputs type={type} id={id} name={name} style={{ width: `${width}%` }} />
    </div>
  );
};
