import React from "react";
import styled from "styled-components";
styled;
import * as S from "./Style";

export const Input = ({ id, name, label, width }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <S.Inputs id={id} name={name} style={{ width: `${width}%` }} />
    </div>
  );
};
