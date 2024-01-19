import styled from 'styled-components';
import Theme from '../../Theme';

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 800px) {
    max-width: 90%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: 0 auto;
  padding-bottom: 40px;

  @media (max-width: 800px) {
    gap: 30px;
  }
`;

export const Button = styled.button`
  font-family: ${Theme.font.font1};
  padding: 20px 20px;
  font-size: 1.25rem;
  font-weight: 500;
  background: ${Theme.colors.white};
  margin-right: 80px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background: #fcf9f9;
  }

  @media (max-width: 800px) {
    font-size: 1.125rem;
    margin: 0 auto;
    padding: 20px 15px;
    font-size: 1rem;
    padding: 15px 20px;
  }
  @media (max-width: 600px) {
    font-size: 0.75rem;
    padding: 15px 10px;
  }
`;

export const Icon = styled.i`
  margin-left: 50px;
  background: #000;
  font-size: 18px;
  padding: 15px;
  border-radius: 50%;
  color: ${Theme.colors.white};

  @media (max-width: 800px) {
    margin-left: 20px;
    font-size: 0.875rem;
  }

  @media (max-width: 600px) {
    margin-left: 8px;
    font-size: 0.875rem;
    padding: 10px;
  }
`;
