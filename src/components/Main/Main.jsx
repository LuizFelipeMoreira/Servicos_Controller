import React from 'react';
import Table from '../Table/table';
import Modal from '../Modal/Modal';
import { Button, ContainerMain, Content, Icon } from './style';

const Main = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [data, setData] = React.useState({
    nome: '',
    lente: '',
    numeroPedido: '',
    dataIda: '',
    dataVolta: '',
  });

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
      {ativo && <Modal setAtivo={setAtivo} data={data} setData={setData} />}
    </ContainerMain>
  );
};

export default Main;
