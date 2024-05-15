import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`
export const GamingListItem = styled.li`
  display:flex;
  background:none;
  width:100%;
  flex-direction:column;
  @media screen and (min-width: 768px){
    width:280px;
  }`
export const GamingThumbNailImage = styled.img`
  height: 300px;
  width: 100vw;
  align-self: center;
   @media screen and (min-width: 768px){
    width:280px;
}`
export const GamingContentSection = styled.div`
  display:flex;
  justify-content: flex-start;
  flex-direction: column;
  padding:10px;
`
export const GamingTitle = styled.p`
  font-family:'Roboto';
  font-size: 15px;
  margin-bottom: 0px;
  color: ${props => props.color};
  `
export const GamingViewsAndDate = styled.p`
  font-family:'Roboto';
  font-size: 15px;
  color: ${props => props.color};
`
