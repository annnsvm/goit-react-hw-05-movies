import styled from 'styled-components';

export const StyledMovieList = styled.ul`
  display: grid;
  max-width: calc(100vw - 35px);
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 16px;
  margin: 10px auto 0;
`;

export const MovieItem = styled.li`
  border-radius: 5px;
  overflow: hidden;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const MovieListTitle = styled.h2`
  text-align: center;
  color: #116466;
  margin: 30px 0;
  font-size: 35px;
`;

export const Poster = styled.img`
  width: 100%;
  max-height: 350px;
  object-fit: cover;
`;

export const Title = styled.span`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;

  border-top: transparent;
  font-size: 14px;
  height: 25px;

  background-color: #ffcb9a;
  color: white;

  &:hover {
    color: #116466;
  }
`;
