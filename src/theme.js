import React from 'react';
import { any } from 'prop-types';
import { css, ThemeProvider } from 'styled-components';

const sizes = {
  desktop: 1400,
  mobile: 800,
};
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

const Theme = ({ children }) => (
  <ThemeProvider
    theme={{
      primaryFont: 'Arial',
      primaryColor: '#666',
      ...media,
    }}
  >
    {children}
  </ThemeProvider>
);

Theme.propTypes = {
  children: any.isRequired,
};
export default Theme;
