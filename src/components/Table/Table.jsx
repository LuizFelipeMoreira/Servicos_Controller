import React from 'react';
import { TableContent, Tbody, Thead, ContainerTable } from './Style';

const Table = () => {
  return (
    <ContainerTable>
      <TableContent>
        <Thead>
          <tr>
            <th>Nome</th>
            <th>Lente</th>
            <th>ida</th>
            <th>volta</th>
            <th>nº OS</th>
            <th>Situacao</th>
          </tr>
        </Thead>
        <Tbody>
          <tr>
            <td>Osvaldo</td>
            <td>Cr Ar</td>

            <td>23/11</td>
            <td>23/11</td>
            <td>Pg001</td>
            <td>Pendente</td>
          </tr>
        </Tbody>
      </TableContent>
    </ContainerTable>
  );
};

export default Table;
