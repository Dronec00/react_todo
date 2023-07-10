import { createGlobalStyle } from "styled-components";

import JosefinSansLatin600Woff from "./josefin-sans-v25-latin-600.woff"
import JosefinSansLatin600Woff2 from "./josefin-sans-v25-latin-600.woff2"
import JosefinSansLatin700Woff from "./josefin-sans-v25-latin-700.woff"
import JosefinSansLatin700Woff2 from "./josefin-sans-v25-latin-700.woff2"
import JosefinSansLatinRegularWoff from "./josefin-sans-v25-latin-regular.woff"
import JosefinSansLatinRegularWoff2 from "./josefin-sans-v25-latin-regular.woff2"

export default createGlobalStyle` 
@font-face {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 400;
    src: local(''),
         url(${JosefinSansLatinRegularWoff2}) format('woff2'), 
         url(${JosefinSansLatinRegularWoff}) format('woff'); 
  }
  /* josefin-sans-600 - latin */
  @font-face {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 600;
    src: local(''),
         url(${JosefinSansLatin600Woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
         url(${JosefinSansLatin600Woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* josefin-sans-700 - latin */
  @font-face {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 700;
    src: local(''),
         url(${JosefinSansLatin700Woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
         url(${JosefinSansLatin700Woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
`