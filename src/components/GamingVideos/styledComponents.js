import styled from 'styled-components'

export const GamingContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom:60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }`
export const GamingTitleIconContainer = styled.div`
   display:flex;
   width: 40px;
   border-radius: 80px;
   height: 40px;
   margin-left: 10px;
   margin-right: 10px;
   justify-content: center;
   align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }`
export const GamingVideoTitle = styled.div`
   display:flex;
   align-items: center;
`
export const GamingVideoList = styled.ul`
  display:flex;
  flex-direction: row;
  list-style-type:none;
  flex-wrap: wrap;
  padding: 0px;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }`
export const GamingText = styled.h1`
   font-family::'Roboto';
   font-size: 25px;
   color: ${props => props.color};
   @media screen and (min-width: 768px) {
     font-size: 40px;
}`
export const LoaderContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh`
