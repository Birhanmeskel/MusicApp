import styled from '@emotion/styled';
import { colors, radii, shadows, spacing } from './theme';

export const Input = styled.input`
  background: #0b1320;
  color: ${colors.text};
  border: 1px solid ${colors.border};
  padding: ${spacing(1)};
  border-radius: ${radii.sm};
  outline: none;
  width: 100%;
  &:focus { box-shadow: ${shadows.focus}; border-color: ${colors.primary}; }
`;
