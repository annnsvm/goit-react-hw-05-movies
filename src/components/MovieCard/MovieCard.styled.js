import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieCardContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
  border-bottom: 2px solid white;
  border-top: 2px solid white;
  gap: 20px;
`;

export const MovieCardTitle = styled.h2`
  color: #116466;
  margin-bottom: 10px;
`;

export const MovieCardSubTitle = styled.h3`
  color: #116466;
  margin-bottom: 10px;
`;

export const MovieCardText = styled.p`
  margin-bottom: 30px;
`;

export const MovieCardSubContainer = styled.div`
  border-bottom: 2px solid white;
  padding-bottom: 20px;
`;

export const MovieCardInfo = styled.h3`
  color: #116466;
  text-align: center;
  margin-bottom: 20px;
`;

export const MovieCardList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const MovieCardLink = styled(Link)`
  color: #116466;

  &:hover {
    text-decoration: underline;
  }
`;
