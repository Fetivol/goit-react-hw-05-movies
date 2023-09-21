import { styled } from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 15px;
  margin-top: 15px;
  padding: 15px;
  border: 1px solid #0078d0;
  border-radius: 8px;
  background-color: #dff3f6;
`;

export const ImgStyled = styled.img`
  width: 20%;
  height: auto;
  border-radius: 8px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: #0078d0;
  font-weight: 600;
`;

export const MovieTitle = styled.h2`
  font-size: 36px;
`;

export const MovieOverview = styled.h3`
  font-size: 24px;
`;

export const MovieGenres = styled.h3`
  font-size: 18px;
`;

export const TextStyled = styled.h3`
  font-size: 18px;
  color: black;
  font-weight: 400;
`;
