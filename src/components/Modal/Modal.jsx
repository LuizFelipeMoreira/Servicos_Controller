import React from 'react';
import styled from 'styled-components';
import Input from '../Form/Input';
import { ButtonClose, ContainerModal, ContentModal } from './style';
import { Form, SubmitButton, TitleModal } from './style';
import PropTypes from 'prop-types';

const Modal = ({ setAtivo }) => {
  return (
    <ContainerModal>
      <ContentModal>
        <ButtonClose onClick={() => setAtivo((ativo) => !ativo)}>X</ButtonClose>

        <TitleModal>Adicionar Novo Serviço</TitleModal>

        <Form>
          <Input
            name="Nome"
            width={100}
            id="nome"
            classe="span2"
            label="Nome"
          />

          <Input name="lente" id="lente" label="Lente" />

          <Input type="text" id="numeroPedido" label="Numero do Pedido" />

          <Input
            type="date"
            name="dataIda"
            id="dataIda"
            width={80}
            label="Data de Ida"
          />

          <Input
            type="date"
            name="dataVolta"
            id="dataVolta"
            width={80}
            label="Data de Volta"
          />
        </Form>

        <SubmitButton>Enviar</SubmitButton>
      </ContentModal>
    </ContainerModal>
  );
};

Modal.propTypes = {
  setAtivo: PropTypes.func,
};

export default Modal;
