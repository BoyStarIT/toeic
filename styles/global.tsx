import { css, Global } from '@emotion/core';
import { colors } from './theme/colors';

export const globalStyles = (
  <Global
    styles={css`
      html {
        font-size: 16px;
      }

      body {
        margin: 0;
        color: rgba(0, 0, 0, 0.87);
        font-family: SVN-Poppins, sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5;
        background-color: #fff;
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

      h2 {
        display: block;
        font-size: 1.5em;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
      }
      h3 {
        display: block;
        font-size: 1.17em;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
      }
      p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
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

      /* ul,
      ol {
        list-style: none;
        margin: 0;
        padding: 0;
      } */
      figure {
        outline: none;
      }
      .container-wide {
        width: 100%;
        box-sizing: border-box;
        margin: 0 auto;
        display: block;
        padding-left: 16px;
        padding-right: 16px;
      }

      @media (min-width: 576px) {
        .container-wide {
          padding-left: 24px;
          padding-right: 24px;
        }
      }

      @media (min-width: 1536px) {
        .container-wide {
          max-width: 1536px;
        }
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
      .ant-modal-title {
        font-size: 24px;
        font-weight: 600;
        color: #282828;
      }
      .btn-add {
        color: #000 !important;
        border-color: #000 !important;
        background: transparent;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        -ms-border-radius: 3px;
        border-radius: 3px;
        &:hover,
        &:focus {
          background: #000 !important;
          color: #fff !important;
        }
      }
      .cursor-pointer {
        cursor: pointer;
      }
      .css-sdnrrq {
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        fill: currentcolor;
        flex-shrink: 0;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        color: rgb(255, 255, 255);
        cursor: pointer;
        font-size: 30px;
        border-radius: 100%;
      }
      .sub-title {
        font-size: 1rem;
      }
    `}
  />
);
