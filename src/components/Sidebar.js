import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';


const Nav = styled.div`
  background: #232F3E;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:#0d5157;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const NavIcon = styled(Link)`
  
  font-size: 1.5rem;
  display: none;


  @media (max-width: 768px) {
    display: flex;
    position: relative;
    right: 5%;
  

    
    }
`;

const NavIconclose = styled(Link)`
    font-size: 1.5rem;

    @media (max-width: 768px) {
      display: flex;
      position: relative;
      right: 0%;
    
  
      
      }

`;

const SidebarNav = styled.nav`
  background: black;
  color: black;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  display: none;

  @media (max-width: 768px) {
     display: block;

    
    }
`;

const SidebarWrap = styled.div`
  width: 100%;
`;
const NavMenu = styled.div`
    position: relative;
    right: 8%;

    @media (max-width: 768px) {
      display: none;
      }
`
const NavLink = styled(Link)`
   color: #fff;
   padding: 0px 17px;
   font-size: 15px;
   font-weight: 600;
`
const NavContent = styled.div`
   color: white;
   display: flex;
   justify-content: flex-end;
   align-items: center;
   margin-left: auto;

`;
const Content = styled.p`
   font-size: 12px;
   padding: 0px 40px;
   margin: 0px 25px;
`;
const NavBorder = styled.div`
 background: black;
 height: 20px;
`;
const NavInfo = styled.p`
  font-size: 10px;
  color: #fff;
  margin-left: 63px;
  padding: 3px 5px;
`;
const Navbutton = styled.button`
position: relative;
left: 15%;
padding: 8px 14px;
background-color: #00acb1;
border: 1px solid #00acb1;
border-radius: 6px;
color: #fff;
font-weight: 600;

@media (max-width: 768px) {
 display: none;
  }

`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const MyLogo = styled.img`
     width: 120px;
     position: relative;
     right: 17%;

     @media (max-width: 768px) {
       position: relative;
       left: 5%;
     
      }
  `;
  
 

  return (
    <>
       <NavBorder>
         <NavInfo>+8801937373785</NavInfo>
       </NavBorder>
      <IconContext.Provider value={{ color: '#fff' }}>
    
        <Nav>
       <MyLogo src='https://metropolitanhost.com/themes/themeforest/react/docfind/assets/img/logo-light.png'></MyLogo>
          
          <NavMenu>
            <NavLink to=''>Home</NavLink>
            <NavLink to=''>Blog</NavLink>
            <NavLink to=''>Pages</NavLink>
            <NavLink to=''>Clinics</NavLink>
            <NavLink to=''>Doctors</NavLink>
            <NavLink to=''>Contact Us</NavLink>
          </NavMenu>
          <Navbutton>Get A Quate ➔</Navbutton>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIconclose to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIconclose>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;