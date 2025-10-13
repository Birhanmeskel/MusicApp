import styled from '@emotion/styled';
import { Card as BaseCard } from './ui/Card.styles';

export const FilterCard = styled(BaseCard)`
  padding: 16px;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  margin: 0;
  margin-bottom: 12px;
  font-size: 18px;
`;

export const Row = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Col = styled.div`
  flex: 1 1 200px;
`;
