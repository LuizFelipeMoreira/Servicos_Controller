import React from "react";
import styled from "styled-components";

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
  background: $branco;
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
`;

export const Modal = () => {
  return (
    <ContainerModal>
      <ContentModal>
        <ButtonClose>X</ButtonClose>

        <TitleModal>Adicionar Novo servico</TitleModal>

        <Form></Form>
      </ContentModal>
    </ContainerModal>
  );
};
