import React from 'react';
import styled from 'styled-components';
import Table from '../Table/table';
import { Modal } from '../Modal/Modal';

const Content = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: 0 auto;
  font-family: 'Josefin Sans';
  padding-bottom: 40px;
`;

const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`;

const Button = styled.button`
  padding: 20px 20px;
  font-size: 1.125rem;
  font-weight: 500;
  background: #fff;
  margin-right: 80px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background: #fcf9f9;
  }
`;

const Icon = styled.i`
  margin-left: 50px;
  background: #000;
  font-size: 18px;
  padding: 20px;
  border-radius: 50%;
  color: #fff;
`;

const Main = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <ContainerMain>
      <Content>
        <Button onClick={() => setAtivo(true)}>
          Adicionar Serviço
          <Icon className="fa-solid fa-plus" />
        </Button>

        <Button>
          Serviços do dia
          <Icon className="fa-solid fa-magnifying-glass" />
        </Button>
      </Content>

      <Table />
      {ativo && <Modal setAtivo={setAtivo} />}
    </ContainerMain>
  );
};

export default Main;
