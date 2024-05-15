import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LogoLink = styled(Link)`
  text-decoration: none;
`

export const NavbarHeader = styled.nav`
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  top:0;
  height: 60px;
  width: 100%;
  position: fixed;
  background-color: ${props => props.bgColor};
   @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px
}`
export const HeaderLogo = styled.img`
  height:80px;
  width:30px;
  @media screen and (min-width: 768px) {
    height:80px;
     width:30px;
}`
export const ActionsContainer = styled.div`
  display:flex;
  justify-content: flex-end;
  align-items: center;
`
export const ThemeButton = styled.button`
   background: none;
   border: none;
   margin-left: 10px
`
export const LogoutIconButton = styled.button`
  background:none;
  border:none;
  @media screen and (min-width: 768px) {
    display: none;
}`
export const LogoutButton = styled.button`
  font-family:'Roboto';
  border: 1px solid;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  margin-left: 6px;
  border-color: ${props => props.color}
  @media screen and (min-width: 768px) {
    display: none;
}`
export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
`
export const ModalContainer = styled.div`
  display:flex;
  justify-content: space-between;
  flex-direction: column;
  height:150px;
  width:250px;
  background-color:white;
  border-radius:10px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    height:200px;
     width:400px;
}`
export const CloseButton = styled.button`
  font-family:'Roboto';
  font-size: 12px;
  font-weight: bold;
  border-radius: 5px;
  cursor:pointer;
  background-color: transparent;
  border: 1px solid grey;
  padding: 6px;
  padding-right: 12px;
  padding-left: 12px;
  outline:none;
  color: grey;
  margin: 12px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 12px;
    padding-right: 20px;
    padding-left: 20px;
}`
export const ConfirmButton = styled.button`
  font-family:'Roboto';
  font-size: 12px;
  font-weight: bold;
  align-self: flex-end;
  border-radius: 5px;
  cursor:pointer;
  background-color:  #3b82f6;
  border: 1px solid  #3b82f6;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  outline:none;
  margin: 10px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 12px;
    padding-right: 20px;
    padding-left: 20px;
}`
export const ModalDesc = styled.p`
  font-family:'Roboto';
  font-size: 15px;
  margin: 10px;
  color: black;
  text-align:center;
   @media screen and (min-width: 768px) {
    font-size: 20px;
}`
export const ButtonsContainer = styled.div`
   display:flex;
  justify-content: space-between;
  flex-direction: row;
`