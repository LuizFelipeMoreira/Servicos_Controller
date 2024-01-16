import React from 'react';
import styled from 'styled-components';
import Theme from '../../Theme';

export const ContainerTable = styled.div`
  margin: 0 auto;
  width: 95%;
  max-height: 350px;
  overflow-y: auto;
`;

export const TableContent = styled.table`
  width: 100%;
  font-family: ${Theme.font.font1};
  font-weight: 400;
  border-collapse: collapse;
  border: none;
  text-align: center;
`;

export const Thead = styled.thead`
  background: ${Theme.colors.black1};
  padding: 5px;
  color: ${Theme.colors.white};
  border-top: 1px solid #21262d;
  th {
    padding: 10px;
  }

  th:first-child {
    border-radius: 5px 0 0;
    border-left: 2px solid #21262d;
  }
  th:last-child {
    border-radius: 0 5px 0 0;
    border-right: 1px solid #21262d;
  }
`;

export const Tbody = styled.tbody`
  background: ${Theme.colors.white};

  td {
    padding: 8px;
    border-bottom: 1px solid #e9ecef;
  }
`;
