import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavigationLgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 95%;
  width: 250px;
  background-color: ${props => props.bgColor};
  position: fixed;
  top: 60px;
  @media screen and (max-width: 768px) {
    display: none;
  }`
export const NavOptions = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  list-style-type: none;
  padding: 0px;
  margin-top: 0px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const NavLinkContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-left: 20px;
`
export const NavText = styled.p`
  font-family:'Roboto';
  font-size:18px;
  margin-left: 15px;
  color: ${props => props.color};
`
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`
export const ContactHeading = styled.p`
  font-family:'Roboto';
  font-size:25px;
  font-weight: bold;
  color: ${props => props.color};
`
export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
`
export const ContactNote = styled.p`
  font-family:'Roboto';
  font-size:20px;
  color: ${props => props.color};
`
export const ContactImage = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50px;
  margin-righ: 10px;
`
export const NavigationSmallContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  background-color: ${props => props.bgColor};
  position: fixed;
  bottom: 0;
  padding:10px
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }`
export const NavBar = styled.div`
  display: flex;
`