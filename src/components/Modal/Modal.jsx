import React from "react";
import styled from "styled-components";
import * as Forms from "../Form/Forms";
import(
  "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
);
const ContainerModal = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 2000;
  justify-content: center;
  align-items: center;
  font-family: "Poppins";
`;

const ContentModal = styled.div`
  max-width: 500px;
  width: 500px;
  background: #fff;
  padding: 20px 30px;
  border-radius: 8px;
  justify-items: center;
  position: relative;
`;

const TitleModal = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

const ButtonClose = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: -10px;
  right: -10px;
  border: none;
  cursor: pointer;
  background: #000;
  color: #fff;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  justify-content: center;

  label {
    display: block;
    margin-bottom: 5px;
  }
`;

export const Modal = () => {
  return (
    <ContainerModal>
      <ContentModal>
        <ButtonClose>X</ButtonClose>

        <TitleModal>Adicionar Novo Serviço</TitleModal>

        <Form>
          <Forms.Input name="Nome" id="nome" label="Nome" width={90} />
          <Forms.Input name="lente" id="lente" label="Lente" />
          <Forms.Input
            name="numeroPedido"
            id="numeroPedido"
            label="Numero do Pedido"
          />
        </Form>
      </ContentModal>
    </ContainerModal>
  );
};
