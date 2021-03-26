import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --blue:#00BCD3;
    --title: #2E384D;
    --text: #666666;
    --background: #F2F3F5;
    --orange: #EDA654;
    --backgroundCalculator: #E6E6E6;
    --screenCalculator: #C4C5CC;
    --numbersCalculator: #FAFAFA;

    --bbBlueLight: #D4F1F4;
    --blueGreenLight: #75E6DA;
    --blueGrottoLight:#189AB4;
    --navyBlueLight: #05445E;
    --redLight: #E41A18;
  }

  body {
    background: var(--background);
    color: var(--text);
  }

  body, input, textarea, button {
    font: 400 1rem 'Poppins', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%; 
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;
