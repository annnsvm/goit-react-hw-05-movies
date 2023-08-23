import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 30px 0px;
  text-align: center;
  box-shadow: #ffcb9a 0px 4px 4px;
  background-color: #116466;
  position: fixed;
  width: 100%;
  z-index: 10;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  color: #d1e8e2;

  &:not(:last-child) {
    margin-right: 40px;
  }

  &.active,
  &:hover,
  &:focus {
    color: #ffcb9a;
    text-decoration: underline;
  }
`;

export const StyledMain = styled.main`
  padding: 90px 50px;
`;
