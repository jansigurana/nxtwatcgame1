import styled from 'styled-components'

export const FailedView = styled.div`
  display:flex;
  justify-content: center;
  flex-direction: column;
  background:none;
  align-items: center;
`
export const FailedImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px){
    width: 400px;
  }`
export const FailedHeading = styled.h1`
  font-family:'Roboto';
  font-size:25px;
  color: ${props => props.headingColor};
  text-align:center;
`
export const FailedNote = styled.p`
  font-family:'Roboto';
  font-size:20px;
  color: ${props => props.noteColor};
  text-align:center;
`
export const RetryButton = styled.button`
  border:none;
  background-color:#4f46e5;
  color:white;
  border-radius:5px;
  font-family:'Roboto';
  padding-top:5px;
  padding-bottom:5px;
  padding-left:10px;
  padding-right:10px;
  font-size: 15px;
`
