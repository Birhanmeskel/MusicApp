import styled from '@emotion/styled';
import { border, color, flexbox, layout, position, shadow, space, typography } from 'styled-system';
import { colors, radii, shadows, spacing } from './theme';

export const Box = styled('div')<any>
  (
    space,
    layout,
    flexbox,
    border,
    color,
    typography,
    position,
    shadow,
    {
      boxSizing: 'border-box',
    }
  );

export const Card = styled(Box)({
  background: colors.panel,
  border: `1px solid ${colors.border}`,
  borderRadius: radii.md,
  boxShadow: shadows.card,
});

export const Button = styled('button')<any>(({ variant = 'primary' }) => ({
  background:
    variant === 'primary'
      ? colors.primary
      : variant === 'danger'
      ? colors.danger
      : variant === 'ghost'
      ? 'transparent'
      : colors.panel,
  color: variant === 'ghost' ? colors.text : '#fff',
  border: variant === 'ghost' ? `1px solid ${colors.border}` : 'none',
  padding: `${spacing(1)} ${spacing(1.5)}`,
  borderRadius: radii.sm,
  cursor: 'pointer',
  transition: 'background 0.2s ease, transform 0.05s ease',
  ':hover': {
    background:
      variant === 'primary' ? colors.primaryDark : variant === 'danger' ? '#b92532' : colors.panel,
  },
  ':active': { transform: 'translateY(1px)' },
}));

export const Input = styled('input')({
  background: '#0b1320',
  color: colors.text,
  border: `1px solid ${colors.border}`,
  padding: spacing(1),
  borderRadius: radii.sm,
  outline: 'none',
  width: '100%',
  ':focus': { boxShadow: shadows.focus, borderColor: colors.primary },
});

export const Row = styled(Box)({ display: 'flex' });
export const Col = styled(Box)({ display: 'flex', flexDirection: 'column' });
