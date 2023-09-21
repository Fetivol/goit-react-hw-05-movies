import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const MoviesListStyled = styled.ul`
  width: 500px;
  padding: 15px;
  background-color: #dff3f6;
  border-radius: 12px;
  color: #0078d0;
  font-size: 18px;
  font-weight: 400;
`;

export const MoviesListElementStyled = styled.li`
  padding: 5px;
  transition: all 0.3s;
  &:hover,
  &:focus {
    transform: scale(1.1) translateX(30px);
  }
`;

export const MovieLink = styled(Link)``;
