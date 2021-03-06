import React, { useEffect, useState, useRef } from "react";
import { connect } from "../../redux/blockchain/blockchainActions";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/data/dataActions";
import { Link } from 'react-scroll'
import {
  Nav,
  NavLogo,
  NavContainer,
  MobileIcon,
  NavMenu,
  NavItems,
  NavLink,
  StyledButton,
  StyledButtonMobile,
  NavIcon,
  NavMenuRight,
  ConnectButtonImg,
  MobileMenu, MobileNavItems, NavLinkMobile
} from './Navbar.element'
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";

import * as s from "../../styles/globalStyles";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...${input.substring(input.length-5,input.length)}` : input;

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }

  }
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const getData = () => {
    console.log(blockchain.account);
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  const socialMedia = (url) => {
    window.open(url, '_blank');
  }

  const homeLink = () => {
    window.open("https://goatsociety.io/", '_blank')
  }

  const aboutLink = () => {
    window.open("https://goatsociety.io/#about", '_blank')
  }

  const teamLink = () => {
    window.open("https://goatsociety.io/#team", '_blank')
  }

  const merchLink = () => {
    window.open("https://shop.goatsociety.io/", '_blank')
  }

  const utilitiesink = () => {
    window.open("https://shop.goatsociety.io/#utilities", '_blank')
  }


  return (
    <>

      <Nav scrollNav={scrollNav}>
        <NavContainer>
          <NavLink to="">
            <NavLogo alt={"logo"} src={"config/images/logo.png"} onClick={toggleHome}></NavLogo>
          </NavLink>
          <NavMenu onClick={handleClick} click={click}>
            <NavItems>
              <NavLink onClick={homeLink} spy={true} smooth={true} offset={-80} duration={500}>Home</NavLink>
            </NavItems>
            <NavItems>
              <NavLink onClick={aboutLink} spy={true} smooth={true} offset={-80} duration={500}>About Us</NavLink>
            </NavItems>
            <NavItems>
              <NavLink onClick={utilitiesink} spy={true} smooth={true} offset={-80} duration={500}>Utilities</NavLink>
            </NavItems>
            <NavItems>
              <NavLink onClick={teamLink} spy={true} smooth={true} offset={-80} duration={500}>Team</NavLink>
            </NavItems>
            <NavItems>
              <NavLink onClick={merchLink} spy={true} smooth={true} offset={-80} duration={500}>Merch</NavLink>
            </NavItems>
          </NavMenu>

          <NavMenuRight>
            {blockchain.account === "" || blockchain.smartContract === null ? (
              <NavItems>
                <NavLinkMobile style={{
                  cursor: "pointer",
                }}
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(connect());
                    getData();
                  }} >
                  <ConnectButtonImg src={"config/images/connectButton.png"} alt={"connect"} />
                </NavLinkMobile>
              </NavItems>
            ) : ""}

            {blockchain.account !== null ? (
              <NavItems>
                <NavLinkMobile>
                <StyledButton>{truncate(blockchain.account, 7)}</StyledButton>
                </NavLinkMobile>
              </NavItems>
            ) : ""}
            <NavItems >
              <NavLinkMobile onClick={() => socialMedia("https://discord.com/invite/goatsociety")}>
                <NavIcon src={"config/images/discord.png"}></NavIcon>
              </NavLinkMobile>
            </NavItems>
            <NavItems >
              <NavLinkMobile onClick={() => socialMedia("https://www.instagram.com/goatsocietynft/")}>
                <NavIcon src={"config/images/instagram.png"}></NavIcon>
              </NavLinkMobile>
            </NavItems>
            <NavItems >
              <NavLinkMobile onClick={() => socialMedia("https://twitter.com/goatsocietynft")}>
                <NavIcon src={"config/images/twitter.png"}></NavIcon>
              </NavLinkMobile>
            </NavItems>

          </NavMenuRight>


          <MobileMenu>
            {blockchain.account === "" || blockchain.smartContract === null ? (
              <MobileNavItems>
                <NavLink style={{
                  cursor: "pointer",
                }}
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(connect());
                    getData();
                  }}>
                  <ConnectButtonImg src={"config/images/connectButton.png"} alt={"connect"} />
                </NavLink>
              </MobileNavItems>
            ) : ""}

            {blockchain.account !== null || blockchain.smartContract !== null ? (
              <MobileNavItems>
                <NavLink>
                <StyledButton>{truncate(blockchain.account, 7)}</StyledButton>
                </NavLink>
              </MobileNavItems>
            ) : ""}


            <MobileNavItems >
              <NavLinkMobile onClick={() => socialMedia("https://discord.com/invite/goatsociety")}>
                <NavIcon src={"config/images/discord.png"}></NavIcon>
              </NavLinkMobile>
            </MobileNavItems>
            <MobileNavItems >
              <NavLink onClick={() => socialMedia("https://www.instagram.com/goatsocietynft/")}>
                <NavIcon src={"config/images/instagram.png"}></NavIcon>
              </NavLink>
            </MobileNavItems>
            <MobileNavItems >
              <NavLink onClick={() => socialMedia("https://twitter.com/goatsocietynft")}>
                <NavIcon src={"config/images/twitter.png"}></NavIcon>
              </NavLink>
            </MobileNavItems>
          </MobileMenu>




          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>

        </NavContainer>
      </Nav>
    </>
  )
}

export default Navbar
