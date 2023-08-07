import { useState, useEffect } from "react";

import { HeaderContainer, HeaderWrapper, LogoLink, Navbar } from "./style";
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = () => {
  const [bgColor, setBgColor] = useState('transparent');

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 200) {
      setBgColor('#CCCCFF');
    } else {
      setBgColor('transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Navbar style={{ backgroundColor: bgColor }}>
          <LogoLink to='/'>
            <Logo style={{width: '92.5px', height: '30px'}} />
          </LogoLink>
        </Navbar>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
