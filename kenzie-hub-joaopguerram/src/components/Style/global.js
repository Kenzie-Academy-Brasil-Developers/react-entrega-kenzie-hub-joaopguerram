import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
html, body, figure, img, div, section, article, input, button,span, textarea, p, h1, h2, h3, h4, h5, h6, a, ul, li, ol, footer, aside, form, header{
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Inter', sans-serif;
    text-decoration: none; 
    
  } 
  :root {
  --color-primary: #FF577F;
  --color-primary-Focus: #FF427F;
  --color-primary-Negative: #59323F;
  --color-Grey-4: #121214;
  --color-Grey-3: #212529;
  --color-Grey-2: #343B41;
  --color-Grey-1: #868E96;
  --color-Grey-0: #F8F9FA;
  --color-Negative: #E83F5B;
  --color-Sucess:#3FE864;
  
  --heading-1: 26px;
  --heading-2: 22px;
  --heading-3: 18px;
  --heading-4: 14px;
  --headline: 16px;
  --body: 14px;
  --body-600: 14px;
  --caption: 12px;
  
}
`;
export default GlobalStyle;
