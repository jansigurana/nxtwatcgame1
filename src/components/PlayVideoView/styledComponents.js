import styled from 'styled-components'
export const VideoPlayer = styled.div`
  padding: 20px;
`
export const PlayVideoTitle = styled.p`
  font-family:'Roboto';
  font-size: 25px;
  color: ${props => props.color};
`
export const PlayVideoStatus = styled.p`
  font-family:'Roboto';
  font-size: 15px;
  color: ${props => props.color};
`
export const PlayVideoStatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center
  flex-direction: row;
`
export const PlayVideoDot = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  padding-right: 5px;
  padding-left: 5p;
`
export const PlaySocialButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const SocialButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  color: ${props => props.color};
  margin-right: 10px;
  color:#4f46e5;
`
export const ButtonText = styled.span`
  margin-left: 5px;
  color:#4f46e5;
  @media screen and (max-width: 768px) {
    display: none;
}`
export const HrLine = styled.hr`
  border: 1px solid #909090;
`
export const ChannelImage = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  margin-right: 20px;
`
export const ChannelContainer = styled.div`
  display: flex;
  magin-top: 20px;
  align-items: flex-start;
`
export const ChannelInfo = styled.div`
  display: flex;
  flex-direction:column;
`
export const ChannelName = styled.p`
  font-family:'Roboto';
  font-size: 15px;
  color: ${props => props.color};
  margin:0;
`
export const ChannelSubscribers = styled.p`
  font-family:'Roboto';
  font-size: 15px;
  color: ${props => props.color};
`
export const ChannelDescription = styled.p`
  font-family:'Roboto';
  font-size: 15px;
  color: ${props => props.color};
`
export const BtnContainer = styled.div`
  display: flex;
  background: none;
`
