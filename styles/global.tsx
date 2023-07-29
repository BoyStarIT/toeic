import { css, Global } from '@emotion/core';
import { colors } from './theme/colors';

export const globalStyles = (
  <Global
    styles={css`
      html {
        font-size: 16px;
      }

      body {
        font-size: 0.875rem;
        line-height: 1.5;
        overflow-x: hidden;
      }
      #main-app {
        min-height: 100vh;
        min-width: 100vw;
      }
      ::-moz-selection {
        background: ${colors.lightGrey5};
      }
      ::selection {
        background: ${colors.lightGrey5};
      }

      ::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: 25px;
      }
      ::-webkit-scrollbar {
        width: 6px;
        height: 4px;
      }
      ::-webkit-scrollbar-thumb {
        border-radius: 25px;
        background-color: #929191;
      }

      input[type=file], /* FF, IE7+, chrome (except button) */
      
      input[type=file]::-webkit-file-upload-button {
        /* chromes and blink button */
        cursor: pointer;
      }

      .h1,
      .h2,
      .h3,
      .h4,
      .h5,
      .h6,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        line-height: 1;
      }

      p {
        font-size: 1rem;
        line-height: 1;
        margin-bottom: 0.5rem;
      }

      a {
        font-size: 1rem;
        cursor: pointer;
        color: inherit;

        &:hover {
          color: inherit;
          text-decoration: none;
        }
        &.disabled-link {
          pointer-events: none;
          cursor: default;
        }
      }

      img {
        max-width: 100%;
      }

      ul,
      ol {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      figure {
        outline: none;
      }

      .container {
        width: 100%;
        margin-left: auto;
        box-sizing: border-box;
        margin-right: auto;
        display: block;
        padding-left: 16px;
        padding-right: 16px;
      }

      @media (min-width: 576px) {
        .container {
          padding-left: 24px;
          padding-right: 24px;
        }
      }

      @media (min-width: 1170px) {
        .container {
          max-width: 1170px;
        }
      }
    `}
  />
);
