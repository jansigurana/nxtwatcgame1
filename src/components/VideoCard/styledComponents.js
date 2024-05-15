import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
   text-decoration: none;
`
export const TrendingListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
  background: none;
  @media screen and (min-width: 768px){
    flex-direction: row;
    margin-left: 40px;
`
export const TrendingThumbNailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px){
    width: 300px;
}`
export const TrendingVideoDetails = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
export const TrendingProfileImage = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  margin: 20px;
  @media screen and (min-width: 768px){
    display: none;
`
export const TrendingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  @media screen and (min-width: 768px){
    margin-left: 20px;
}`
export const TrendingTitle = styled.p`
  font-family:'Roboto';
  font-size: 15px;
  color: ${props => props.color};
`
export const TrendingChannelName = styled.p`
  font-family:'Roboto';
  font-size: 15px;
  color: ${props => props.color};
`
export const TrendingViewsAndDate = styled.p`
  font-family:'Roboto';
  font-size: 15px;
  color: ${props => props.color};
}`
export const TrendingDot = styled.span`
   height: 20px;
  width: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px
`
