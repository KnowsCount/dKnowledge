import { createGlobalStyle, css, DefaultTheme } from 'styled-components'
import { device } from './devices'

interface CustomDefaultTheme extends DefaultTheme {
	colors: {
		themeColor: string
		navigationColor: string
		navigationTextColor: string
		fontColor: string
		descColor: string
		itemLineColor: string
		lineColor: string
		titleColor: string
		white: string
		black: string
	}
	device: {
		xs: string
		sm: string
		md: string
		lg: string
		xl: string
		xxl: string
	}
}

export const globalTheme: CustomDefaultTheme = {
	colors: {
		themeColor: '#44B9F9',
		navigationColor: '#121B41',
		navigationTextColor: '#A3B1BF',
		fontColor: '#666666',
		descColor: '#979797',
		lineColor: '#979797',
		itemLineColor: '#E5E5E5',
		titleColor: '#314659',
		white: '#ffffff',
		black: '#090E22',
	},
	device: device,
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  html {
    font-size: 100%; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    -ms-text-size-adjust: 100%; /* 2 */
    color: ${globalTheme.colors.fontColor};
  }
  p {
    color: ${globalTheme.colors.fontColor};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  :focus {
    outline: 0;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  html,
  body {
    height: 100%;
    /* scroll-behavior: smooth; */
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  html {
    font-size: 100%; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    -ms-text-size-adjust: 100%; /* 2 */
  }
  a:active,
  a:hover {
    outline: 0;
  }
  img {
    border: 0; /* 1 */
    -ms-interpolation-mode: bicubic; /* 2 */
  }
  button,
  input {
    line-height: normal;
  }
  button,
  select {
    text-transform: none;
  }
  button,
  html input[type="button"], /* 1 */
  input[type="reset"],
  input[type="submit"] {
    -webkit-appearance: button; /* 2 */
    cursor: pointer; /* 3 */
    *overflow: visible; /* 4 */
  }
  button[disabled],
  html input[disabled] {
    cursor: default;
  }
  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  textarea {
    overflow: auto; /* 1 */
    vertical-align: top; /* 2 */
    resize: vertical;
  }
`
