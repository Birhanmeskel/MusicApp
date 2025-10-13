import styled from '@emotion/styled';
import { colors, radii, spacing } from './theme';

type Variant = 'primary' | 'danger' | 'ghost' | 'default';

export const Button = styled.button<{ variant?: Variant }>`
  background: ${({ variant = 'primary' }) =>
    variant === 'primary' ? colors.primary :
    variant === 'danger' ? colors.danger :
    variant === 'ghost' ? 'transparent' : colors.panel};
  color: ${({ variant = 'primary' }) => variant === 'ghost' ? colors.text : '#fff'};
  border: ${({ variant = 'primary' }) => variant === 'ghost' ? `1px solid ${colors.border}` : 'none'};
  padding: ${spacing(1)} ${spacing(1.5)};
  border-radius: ${radii.sm};
  cursor: pointer;
  transition: background 0.2s ease, transform 0.05s ease;
  &:hover {
    background: ${({ variant = 'primary' }) =>
      variant === 'primary' ? '#1158c7' :
      variant === 'danger' ? '#b92532' :
      colors.panel};
  }
  &:active { transform: translateY(1px); }
`;
