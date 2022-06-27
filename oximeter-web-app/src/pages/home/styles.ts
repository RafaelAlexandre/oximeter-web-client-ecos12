import styled from "styled-components";

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
  padding-top: 25px;
  padding-bottom: 25px;
  
  span {
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    color: #DCDCDC;
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
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    color: #DCDCDC;
    font-weight: normal;
  }

`;

