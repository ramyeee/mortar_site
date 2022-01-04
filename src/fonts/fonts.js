import { createGlobalStyle } from "styled-components";
import BareunDotum from './BareunDotumOTF2.woff'
import NanumGothic from './NanumGothicCoding-Regular.woff'

export default createGlobalStyle`
    @font-face {
        font-family: 'Nanum Gothic Coding', monospace;
        src: local('Nanum Gothic Codiing'),
        url(${NanumGothic}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
`;