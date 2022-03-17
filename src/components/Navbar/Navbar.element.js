import  styled  from "styled-components";
import {Link as LinkS } from "react-scroll";

export const Nav= styled.nav`
  background :${({scrollNav}) => (scrollNav ? "#101522" : "transparent")};
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  font-size: 1.3rem;
  clear: both;
  margin-top:-100px;
  width: 100%;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer= styled.div`
  display: flex;
  justify-content:space-around;
  height: 100px;
  z-index: 1;
  width: 100%;
  padding:0 24px;
  max-width: 2200px;
  transform: translateX(-55%);
  left: 50%;
  position: absolute;

  @media screen and (max-width: 960px) {
    transform: translateX(-52%);
  }
  @media screen and (min-width: 960px) and (max-width: 1124px) {
    justify-content: end;
    padding: 0;
  }
`;


export const NavLogo = styled.img`
  width: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top  : 20px;
  justify-self:flex-end;
  transition: width 0.5s;
  transition: height 0.5s;
  padding-bottom:2vh;
  

  @media only screen and (min-width: 767px) {
    width: 90px;
    margin-top  : 20px;
    margin-left: 24px;
  }`;


  
export const MobileIcon = styled.div`
display:none;
  @media (max-width: 960px) {
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100%,150%);
    font-size:1.2rem;
    cursor: pointer;
    color: var(--primary);
    z-index:1;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  float: left;
  justify-content: flex-start;
  margin-left: 0;
  @media screen and (max-width: 960px) {
    display:flex;
    flex-direction:column;
    content: '';
    width:100%;
    max-width: 100%;
    height:100vh;
    position:absolute;
    top:0px;
    left: ${({click}) => (click ? '0%' : '-140%')};
    opacity:1;
    transition: all 0.5s ease;
    background-color: #101522;
    
  }`;

export const NavMenuRight = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
float: right;
justify-content: flex-start;
margin-left: 0;
@media only screen and (max-width: 960px) {
  display: none;
}
`;


export const MobileMenu = styled.ul`
display: flex;
align-items: center;
margin-right: 20px;
@media only screen and (min-width: 960px) {
  display: none;
}
`;




  export const NavItems = styled.li`
    height:80px;
    padding-left:24px;
    list-style: none;
    @media screen and (min-width: 960px) {
      padding: 0; 
    }
    @media screen and (max-width: 960px) {
      height:0%;
      margin-top:9vh;
      &:hover{
        border:none;
      }
    }
    `;


export const MobileNavItems = styled.li`
height:80px;

list-style: none;
@media screen and (max-width: 960px) {
  height:35%;

  &:hover{
    border:none;
  }
}
`;

  export const NavLink = styled(LinkS)`
    text-decoration:none;
    color:#fff;
    align-items:center;
    height:100%;
    padding:0 1rem;
    display:flex;
    cursor:pointer;
    text-transform: uppercase;
    /* font-family: 'wonder'; */
    font-size:1.9rem;
    &:hover{
      color:var(--primary);
    }
    &:active{
      border-bottom: 3px solid #01bf71;
    }

    @media only screen and (min-width: 960px) {
      font-size:1.5rem;
  }
    
    @media screen and (max-width: 960px) {
      text-align:center;
      width:100%;
      padding: 0;
      /* width: 80%; */
      display:table;
      font-size:1.1rem;
    
      &:hover{
        color:#4b59f7;
        transition: all 0.5s ease;
        }
    }
    `;



  export const StyledButton = styled.button`
    padding: 8px 22px;
    border-radius: 10px;
    height:40px;
    color: #fff;
    letter-spacing: 2px;
    margin-top:1.1vw;
    cursor: pointer;
    border: none;
    transition: 0.5s all ease-in-out;
    font-size:1.2rem;
    width: auto;
    background: var(--primary);
  background: linear-gradient(0deg, rgba(34,193,195,1) 100%, rgba(0,0,0,1) 100%);
   


    @media only screen and (min-width: 768px) and (max-width: 1324px) {
    width:100%;
    font-size:0.7rem;
    margin-top:2.2vh;
  }

    @media screen and (max-width: 960px) {
      display:none;
    }

  `;

  export const StyledButtonMobile = styled.button`
   background-color: var(--primary);
    padding: 10px 22px;
    border-radius: 10px;
    white-space: nowrap;
    outline: none;
    border: none;
    font-weight: bolder;
    color: var(--primary-text);
    margin-top:1.1vw;
 
    cursor: pointer;
    display:none;
    transition: 0.5s all ease-in-out;
    :active {
      box-shadow: none;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
    }

    @media screen and (max-width: 960px) {
      text-align:center;
      display:flex;
      justify-content:center;
    }

  `;

  export const NavIcon = styled.img`
    display:flex;
    align-items:center;
    justify-content:center;
    vertical-align:middle;
    margin:10px auto;
    width: 80%;
    padding: 0 !important;

    @media screen and (max-width: 960px) {
      display:flex;
      align-items:center;
      justify-content:flex-start;
      flex-direction:column;
      margin-top: 0;
      
    }
  `;

export const ConnectButtonImg = styled.img`
display:flex;
align-items:center;
justify-content:center;
vertical-align:middle;
margin:20px auto;
width: 80%;


@media screen and (max-width: 960px) {
  display:flex;
  align-items:center;
  justify-content:flex-start;
  flex-direction:column;
  margin-top: 0;
}
`;


