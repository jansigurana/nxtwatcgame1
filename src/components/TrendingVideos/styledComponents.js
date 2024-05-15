import styled from 'styled-components'

export const TrendingContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px){
    margin-left: 250px;
    margin-bottom: 0px;
  }`
export const TitleIconContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius: 80px;
  width: 40px;
  height: 40px;
  margin-left: 10px;
  margin-right: 10px;
  @media screen and (min-width: 768px){
    margin-left: 40px;
  }`
export const TrendingVideoTitle = styled.div`
  display:flex;
  align-items: center;
`
export const TrendingVideoList = styled.ul`
  display:flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  list-style-type: none;
`
export const TrendingText = styled.h1`
   font-family:'Roboto';
  font-size: 25px;
  color: ${props => props.color};
  @media screen and (min-width: 768px){
    font-size: 35px;
  }`
export const LoaderContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
