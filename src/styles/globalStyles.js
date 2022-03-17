import styled from "styled-components";

// Used for wrapping a page component
export const Body = styled.div`
  /* background-image: url('config/images/bg.png') ;
  background-size: cover;
  background-position: 100% 100%; */
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
  font-family: 'wonder';
  @media only screen and (max-width: 768px) {
    font-size:1.1rem;
  }
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
  position: relative;
  margin: 0 auto;

  @media only screen and (max-width: 1300px) {
    margin-top:15vh;
    width:50%;
  }

  /* @media only screen and (min-width: 768px) {
    width:100%;
    margin-top:15vh;
  } */

  @media screen and (max-width: 767px) {
    width:100%;
    margin-top:5vh;
    padding:20px 10px 20px;
  }

`;

export const CatDiv = styled.div`
  width:50%;

  /* @media only screen and (min-width: 768px) and (max-width: 960px) {
    margin-top:35vh;
    width:100%;
  } */

  @media screen and (max-width: 768px) {
    width:100%;
    margin-top:-7vh !important;
  }

`;

export const Image = styled.img`
  width: ${({ wid }) => (wid ? wid+"%" : "100%")};
  transition: width 0.5s;
  transition: height 0.5s;
  margin-top:20px;
  display:block;
  margin:0 auto;
  padding-right:10px;
  @media (max-width: 767px) {
    width: 100%;
    margin-top:0;

  }
`;  

export const Icon = styled.img`
  width: ${({ wid }) => (wid ? wid+"%" : "100%")};
  transition: width 0.5s;
  transition: height 0.5s;
  margin-top:20px;
  display:block;
  margin:0 auto;
  padding-right:10px;
  &::after{
    content:'';
    display:block;
   

  }
  @media (max-width: 767px) {
    width: 20%;
    margin-top:0;

  }
`;


export const connectButtonImage = styled.img`
  width: ${({ wid }) => (wid ? wid+"%" : "100%")};
  transition: width 0.5s;
  transition: height 0.5s;
  margin-top:20px;
  display:block;
  margin:0 auto;
  padding-right:10px;
  &::after{
    content:'';
    display:block;
   

  }
  @media (max-width: 767px) {
    width: 50%;
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

  

  @media only screen and (max-width: 767px) {
    justify-content: space-between;
  }


`;

export const connectButton = styled.button`
  width:auto;
  padding:10px;
  background: var(--primary);
  background: linear-gradient(360deg, rgba(37,156,154,1) 58%, rgba(23,22,22,1) 88%, rgba(37,156,154,1) 95%);
  color: #fff;
  display: flex;
  justify-content: center;
  text-align:center;
  font-size:1.2rem;
  border:2px solid var(--primary);
  border-radius:15px;
  border: none;


`;

export const maxButton = styled.button`
  width:auto;
  background: var(--primary);
  background: linear-gradient(0deg, rgba(34,193,195,1) 100%, rgba(0,0,0,1) 100%);
  padding: 10px;
  border-radius:15px;
  font-size:1.2rem;
  color: #fff;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  border: none;

  @media screen and (max-width: 768px) {
    position: relative;
    margin-left: auto;
    margin-bottom: 10px;
    font-size:1.0rem;
    
  }`;

export const maxButtonImage = styled.img`
width: ${({ wid }) => (wid ? wid+"%" : "100%")};
transition: width 0.5s;
transition: height 0.5s;
margin-top:20px;

@media (max-width: 767px) {
  width: 10%;
  margin-top:0;

}
`; 

export const Inline = styled.div`
  display:inline-block; 
`;