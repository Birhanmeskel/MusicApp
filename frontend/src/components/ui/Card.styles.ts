import styled from '@emotion/styled';
import { colors, radii, shadows } from './theme';

export const Card = styled.div`
  background: ${colors.panel};
  border: 1px solid ${colors.border};
  border-radius: ${radii.md};
  box-shadow: ${shadows.card};
`;
