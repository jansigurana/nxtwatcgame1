import styled from 'styled-components'

export const ListItem = styled.li`
  background: none;
  display:flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  @media screen and (min-width: 768px){
    margin-right: 20px;
    width: 280px;
  }`
export const ThumbNailImage = styled.img`
  width: 100%;
`
export const VideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin: 30px;
  border-radius: 50px;
`
export const ContentSection = styled.div`
   display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 6px;
`
export const Title = styled.p`
  font-family:'Roboto';
  font-size: 15px;
  color: ${props => props.color};
`
export const ChannelName = styled.p`
  font-family:'Roboto';
  font-size: 15px;
  color: ${props => props.color};
`
export const ViewsAndDate = styled.p`
  font-family:'Roboto';
  font-size: 15px;
  color: ${props => props.color};
`
export const Dot = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50px;
  padding-left: 5px;
  padding-right: 5px;
  `
