import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: -15px;
  text-align: center;
  min-height: 450px;
`;

export const CastItem = styled.li`
  width: 200px;
  height: 350px;
  margin: 15px;
  border-radius: 8px;
  overflow: hidden;
`;

export const CastListTitle = styled.h2`
  color: #116466;
  text-align: center;
  margin: 20px 0;
`;

export const CastCardInfo = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  color: #116466;
`;

export const CastCardImg = styled.img`
  height: 250px;
  width: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &&:hover,
  &&:focus {
    transform: scale(1.08);
    cursor: zoom-in;
  }
`;
