import styled from "styled-components";

export const HomePage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  

  .loading {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background: url("http://i.imgur.com/zAD2y29.gif") 50% 50% no-repeat white;
    opacity: 0.85;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;

export const HomeRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 70vw;
  height: 100vh;
`;

export const HomeLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30vw;
  height: 100vh;
  background-color: var(--color-backgroung-secondary);
`;

export const GraphTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 25px;
  padding-bottom: 25px;
  
  span {
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    color: var(--color-title);
    font-weight: normal;
  }

`;

export const CommonText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 35px;
  padding-bottom: 15px;
  
  span {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    color: var(--color-secondary-text);
    font-weight: 700;
  }

`;

