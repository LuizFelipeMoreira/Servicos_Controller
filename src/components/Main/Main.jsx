import React from "react";
import Button from "../Button/Button";
import styled from "styled-components";
import Table from "../Table/table";

const Content = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: 0 auto;
  font-family: "Josefin Sans";
  padding-bottom: 40px;
`;

const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`;

const Main = () => {
  return (
    <ContainerMain>
      <Content>
        <Button
          text="Adicionar Serviço"
          className="novoServico"
          icon="fa-solid fa-plus"
        />

        <Button
          text="Serviços do dia"
          className="consultarServico"
          icon="fa-solid fa-magnifying-glass"
        />
      </Content>

      <Table />
    </ContainerMain>
  );
};

export default Main;
