import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }`
  
export const BannerContainer = styled.div`
   background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
   background-size:cover;
   height: 200px;
   display: ${props => props.display};
   justify-content: space-between;
   padding: 20px;
`
export const BannerImage = styled.img`
  height: 30px;
  width: 80px
`
export const BannerText = styled.p`
  font-family:'Roboto';
  font-size: 15px;
  color:black;
  @media screen and (min-width: 768px) {
    font-size: 20px;
}`
export const BannerButton = styled.button`
  color: 'black';
  background:none;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid black;
`
export const BannerLeftPart = styled.div`
  width: 50%;
`
export const BannerRightPart = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const BannerCloseButton = styled.button`
  border: none;
  background: none;
  height: 25px;
`
export const SearchContainer = styled.div`
  display: flex;
  border-radius: 5px;
  border: 1px solid  #909090;
  margin: 20px;
  width: 60%;
  height: 40px;
   @media screen and (min-width: 768px) {
     width: 40px
}`
export const SearchInput = styled.input`
  background:none;
  width: 100%;
  font-family: 'Roboto';
  outline:none;
  padding: 5px;
  border:none;
  color: ${props => props.color};
`
export const SearchIconContainer = styled.button`
  display: flex;
  justify-content: center; 
  align-items: center;
  background-color:#909090;
  width:70px;
  border: none;
`
export const LoaderContainer = styled.div`
   display: flex;
  justify-content: center; 
  align-items: center;
  min-height: 80vh;
  `