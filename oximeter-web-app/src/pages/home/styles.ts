import styled from "styled-components";

export const HomePage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  .loading {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background: url("http://i.imgur.com/zAD2y29.gif") 50% 50% no-repeat white;
    opacity: 0.85;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;

export const GraphTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  .h1 {
    color: #fff;
  }

`;

