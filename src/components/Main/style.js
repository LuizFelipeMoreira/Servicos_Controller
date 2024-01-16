import React from 'react';
import styled from 'styled-components';
import Theme from '../../Theme';

export const Content = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: 0 auto;
  padding-bottom: 40px;
`;

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Button = styled.button`
  font-family: ${Theme.font.font1};
  padding: 20px 20px;
  font-size: 1.25rem;
  font-weight: 500;
  background: ${Theme.colors.white};
  margin-right: 80px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background: #fcf9f9;
  }
`;

export const Icon = styled.i`
  margin-left: 50px;
  background: #000;
  font-size: 18px;
  padding: 20px;
  border-radius: 50%;
  color: ${Theme.colors.white};
`;
