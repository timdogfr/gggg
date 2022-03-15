import styled from "styled-components";

// Used for wrapping a page component
export const Body = styled.div`
  background-image: url('config/images/bg.png') ;
  background-size: cover;
  background-position: 100% 100%;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

// Used for providing space between components
export const SpacerXSmall = styled.div`
  height: 8px;
  width: 8px;
`;

// Used for providing space between components
export const SpacerSmall = styled.div`
  height: 16px;
  width: 16px;
`;

// Used for providing space between components
export const SpacerMedium = styled.div`
  height: 24px;
  width: 24px;
`;

// Used for providing space between components
export const SpacerLarge = styled.div`
  height: 32px;
  width: 32px;
`;

// Used for providing a wrapper around a component
export const Container = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  width: ${({ wid }) => (wid ? wid+"%" : "100%")};


  @media screen and (max-width: 768px) {
    flex-wrap:wrap;
  }
  
`;

export const AmountContainer = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  width: ${({ wid }) => (wid ? wid+"%" : "100%")};


  
`;

export const TextTitle = styled.p`
  color: ${({color}) => color ? color : "#fff"};
  font-size: ${({fs}) => fs ? fs+"rem" : "2.3rem"};
  line-height: 1.6;
  font-weight: 100;
`;

export const TextSubTitle = styled.p`
  color: ${({color}) => color ? color : "#fff"};
  font-size: ${({size}) => size ? size+"rem" : "1.5rem"};
  font-family: 'wonder';
  text-align:${({align}) => align ? align : "center"};
  color: #000;
`;

export const TextDescription = styled.p`
  color: ${({color}) => color ? color : "#fff"};
  font-size: ${({size}) => size ? size : "1.5rem"};
  line-height: 1.6;
  font-family: 'wonder';
  text-align:center;
  width:90%;
  display:block;
  margin:0 auto;

  @media screen and (min-width: 768px) {
    margin-top: 0 ;
  }
`;

export const StyledClickable = styled.div`
  :active {
    opacity: 0.6;
  }
`;

export const line = styled.hr`
width:100%;
color:#6f6f6f;
`;

export const row = styled.div`
display:grid;
grid-template-columns: ${({ col }) => (col ? col+"%" + col+"%" : "50% 50%")};
width : ${({ wid }) => (wid ? wid+"%" : "100%")};
justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
align-items: ${({ ai }) => (ai ? ai : "flex-start")};
column-gap:${({ gap }) => (gap ? gap+"%" : "20%")};

@media screen and (max-width: 768px) {
  grid-template-columns: ${({ col }) => (col ? col+"%" + col+"%" : "100%")};
}`;

export const Mint = styled.div`
  padding:20px 60px 40px;
  background-color: rgba(128, 128, 128, 0.1);
  border:1px solid #4b4b4b;
  border-radius:25px;
  width: 30%;

  @media screen and (max-width: 768px) {
    width:95%;
    margin-top:-5vh;
  }

`;

export const CatDiv = styled.div`
  display:block;
  width:45%;

  @media screen and (max-width: 768px) {
    width:100%;
    margin-top:10px !important;
  }

`;

export const Image = styled.img`
  width: ${({ wid }) => (wid ? wid+"%" : "100%")};
  transition: width 0.5s;
  transition: height 0.5s;
  margin-top:20px;
  display:block;
  margin:0 auto;
  @media (max-width: 767px) {
    width: 100%;
    margin-top:0;

  }
`;  

export const Line = styled.hr`
  width:100%;
  border:1px solid #6f6f6f;
`;

export const FlexContainer = styled.div`
  display:flex;
  flex-direction:${({ fd }) => (fd ? fd : "column")};
  justify-content:${({ jc }) => (jc ? jc : "flex-start")};
  align-items :${({ ai }) => (ai ? ai : "flex-start")};
  flex-wrap:wrap;
  margin-top : ${({ mt }) => (mt ? mt : "0")};


`;

export const connectButton = styled.button`
  width:70%;
  padding:10px;
  background: var(--primary);
  background: linear-gradient(0deg, rgba(34,193,195,1) 90%, rgba(0,0,0,1) 100%);
  color: #fff;
  display: flex;
  justify-content: center;
  text-align:center;
  font-size:1.5rem;
  border:1px solid var(--primary);
  border-radius:15px;
  border: none;


`;

export const maxButton = styled.button`
  width:20%;
  background: var(--primary);
  background: linear-gradient(0deg, rgba(34,193,195,1) 90%, rgba(0,0,0,1) 100%);
  padding: 5px;
  border-radius:15px;
  font-size:1.5rem;
  color: #fff;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  border: none;

  @media screen and (max-width: 768px) {
    position: relative;
    margin-left: auto;
    margin-bottom: 10px;
   
  }


`;


export const Layout = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.9);
  
  
  

`;