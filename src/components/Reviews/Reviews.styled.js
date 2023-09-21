import { styled } from 'styled-components';

export const ListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid #0078d0;
  border-radius: 8px;
  background-color: #dff3f6;
`;

export const ListElement = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  width: 100%;
  border: 1px solid #0078d0;
  border-radius: 8px;
  background-color: #dff3f6;
`;
export const AuthorStyled = styled.h3`
  color: #0078d0;
  font-weight: 600;
  font-size: 18px;
`;

export const Text = styled.p`
  color: #0078d0;
  font-weight: 600;
  font-size: 24px;
`;
