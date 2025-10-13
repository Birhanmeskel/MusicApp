import { css, Global } from '@emotion/react';
import React from 'react';

export const colors = {
  primary: '#1f6feb',
  primaryDark: '#1158c7',
  danger: '#d73a49',
  success: '#2ea043',
  warning: '#d29922',
  bg: '#0d1117',
  panel: '#161b22',
  border: '#30363d',
  text: '#c9d1d9',
  textMuted: '#8b949e',
};

export const radii = {
  sm: '6px',
  md: '10px',
  lg: '14px',
};

export const shadows = {
  card: '0 6px 20px rgba(0,0,0,0.25)',
  focus: '0 0 0 3px rgba(31, 111, 235, 0.35)'
};

export const GlobalStyles: React.FC = () => React.createElement(Global, {
  styles: css`
    * { box-sizing: border-box; }
    html, body, #root { height: 100%; }
    body {
      margin: 0;
      background: ${colors.bg};
      color: ${colors.text};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji';
    }
    a { color: inherit; text-decoration: none; }
    ::selection { background: ${colors.primary}; color: white; }
    input, button { font-family: inherit; }
  `,
});

export const spacing = (n: number) => `${n * 8}px`;
