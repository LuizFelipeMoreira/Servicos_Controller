import React from 'react';
import styled from 'styled-components';

export const ContainerTable = styled.div`
  margin: 0 auto;
  width: 95%;
  max-height: 350px;
  overflow-y: auto;
`;

export const TableContent = styled.table`
  width: 100%;
  font-family: sans-serif;
  font-weight: 400;
  border-collapse: collapse;
  border: none;
  padding: 3px;
  text-align: center;
`;

export const Thead = styled.thead`
  background: #000;
  padding: 5px;
  color: #fff;

  th {
    padding: 8px;
  }

  th:first-child {
    border-radius: 5px 0 0;
  }
  th:last-child {
    border-radius: 0 5px 0 0;
  }
`;

export const Tbody = styled.tbody`
  background: #fff;

  td {
    padding: 5px;
  }
`;
