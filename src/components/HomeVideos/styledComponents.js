import styled from 'styled-components'

export const NoVideosView = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: none;
`
export const NoVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px){
    width: 450px;
  }`
export const NoVideosHeading = styled.h1`
  font-family:'Roboto';
  font-size: 25px;
  color: ${props => props.headingColor};
`
export const NoVideosNote = styled.p`
  font-family:'Roboto';
  font-size: 25px;
  color: ${props => props.noteColor};
`
export const RetryButton = styled.button`
  font-family:'Roboto';
  font-size: 15px;
  border: none;
  background-color: #4f46e5;
  border-radius: 5p;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
`
