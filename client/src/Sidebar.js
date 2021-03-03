import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { FiHome, CgUser, FiBell, BiBookmark } from "react-icons/all";
import { NavLink } from "react-router-dom";
import { COLORS } from "./constants";

const Sidebar = () => {
    return (
        <SidebarWrapper>
            <LogoWrapper>
                <Logo />
            </LogoWrapper>
            <Nav>
                <LinkStyled exact to="/"><FiHome /><Span>Home</Span></ LinkStyled>
                <LinkStyled exact to="/:profileId"><CgUser /><Span>Profile</Span> </ LinkStyled>
                <LinkStyled exact to="/notifications"><FiBell /><Span>Notifications</Span> </ LinkStyled>
                <LinkStyled exact to="/bookmarks"><BiBookmark /><Span>Bookmarks</Span> </ LinkStyled>
            </Nav>
        </SidebarWrapper>
    )
}
const SidebarWrapper = styled.div`
    width:200px;
    border-right:solid 2px lightgrey;
`;

const LinkStyled = styled(NavLink)`
    display:flex;
    align-items:center;
    text-align:left;
    width:150px;
    height:40px;
    font-weight:bold;
    text-decoration:none;
    padding:5px;
    padding-left:10px;
    &.active {
    color: ${COLORS.primary};
    }
    &:hover{
        background-color:rgb(230, 204, 255);
        border-radius:30%;
    }
`;

const Nav = styled.div`
    display:flex;
    flex-direction:column;
`;

const LogoWrapper = styled.div`
    margin-bottom:50px;
    height:50px;
    svg{
        height:40px;
    }
`;

const Span = styled.span`
    margin-left:15px;
`;

export default Sidebar;