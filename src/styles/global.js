import { createGlobalStyle } from "styled-components";
import resetCss from "./reset.css";

export default createGlobalStyle`
    ${resetCss}

    :root {
    --ff-primary:'Roboto', sans-serif;

    --ff-heading:'Press Start 2P', cursive;
    --fixedblack:#1a1a1c;
    --black:#000;
    --white:#ebebeb;
    --blue:#166fb7;
    --purple:#3b21d9;
    }

    body {
        font-family:  'Roboto', sans-serif;
    }

    body::-webkit-scrollbar {
        width: 3px;  
    }

    body::-webkit-scrollbar-track {
        background:#000;    
    }

    body::-webkit-scrollbar-thumb {
        background-color:var(--blue);      
      
    }
    
`;
