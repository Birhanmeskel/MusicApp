import styled from '@emotion/styled';
import { colors } from '../ui/theme';

export const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid ${colors.border};
`;

export const HeaderGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
