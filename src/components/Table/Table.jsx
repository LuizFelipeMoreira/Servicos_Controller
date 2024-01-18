import React from 'react';
import { TableContent, Tbody, Thead, ContainerTable } from './Style';

const Table = () => {
  return (
    <ContainerTable>
      <h1 style={{ color: '#fff', textAlign: 'center', fontWeight: '600' }}>
        Serviços
      </h1>
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
            <td>Osvaldo Cruz</td>
            <td>Cr Ar</td>

            <td>23/11</td>
            <td>23/11</td>
            <td>Pg001</td>
            <td>Pendente</td>
          </tr>
          <tr>
            <td>Mariana lacerdxa</td>
            <td>Cr Ar</td>

            <td>23/11</td>
            <td>23/11</td>
            <td>Pg001</td>
            <td>Pendente</td>
          </tr>
          <tr>
            <td>Lucas oliveira</td>
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
