import React from 'react';
import styled from 'styled-components';
import Theme from '../../Theme';

const Container = styled.header`
  width: 100%;
  background: ${Theme.colors.black1};
  color: white;
  padding: 20px;
  text-align: center;
  margin-bottom: 70px;
  border-bottom: 1px solid #21262d;
`;

const Logo = styled.h1`
  font-size: 2.5rem;
  font-family: 'Josefin Sans';
  font-weight: 400;

  span {
    color: yellow;
  }
`;

const Header = () => {
  return (
    <Container>
      <Logo>
        Bella
        <span>Vision</span>
      </Logo>
    </Container>
  );
};

export default Header;
