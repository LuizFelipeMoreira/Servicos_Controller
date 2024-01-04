import React from 'react';
import styled from 'styled-components';
import Input from '../Form/Input';

// import(
//   "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
// );

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
  font-family: 'Poppins';
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

const SubmitButton = styled.button`
  display: block;
  margin: 20px auto 0 auto;
  padding: 10px 30px;
  font-size: 1.125rem;
  background: #000;
  color: #fff;
  border-radius: 5px;
`;

export const Modal = ({ setAtivo }) => {
  return (
    <ContainerModal>
      <ContentModal>
        <ButtonClose onClick={() => setAtivo((ativo) => !ativo)}>X</ButtonClose>

        <TitleModal>Adicionar Novo Serviço</TitleModal>

        <Form>
          <Input name="Nome" width={100} classe="span2" label="Nome" />
          <Input name="lente" id="lente" label="Lente" />

          <Input type="text" width={100} label="Numero do Pedido" />

          <Input type="date" name="dataIda" label="Data de Ida" />

          <Input type="date" name="dataVolta" label="Data de Volta" />
        </Form>
        <SubmitButton>Enviar</SubmitButton>
      </ContentModal>
    </ContainerModal>
  );
};
