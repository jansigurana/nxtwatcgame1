import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 6px;
  width: 350px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0);
`
export const LoginLogo = styled.img`
  align-self: center,
  width: 180px;
  margin-bottom: 15px;
`
export const InputContainer = styled.di`
  width: 100%;
  margin-top: 15px;
`
export const LoginButton = styled.button`
  font-family:'Roboto';
  font-size: 15px;
  color:white;
  height: 30px;
  width:100%;
  background-color: #4f46e5;
  border: none;
  margin-top: 20px
`
export const SubmitError = styled.p`
  font-family:'Roboto';
  font-size: 12px;
  color:#ff0b37;
`
export const InputLabel = styled.label`
  font-family:'Roboto';
  font-size: 12px;
  color: #475569;
  font-weight: 500;
`
export const UserInput = styled.input`
  font-family:'Roboto';
  font-size: 15px;
  color:#475569;
  outline:none;
  width:100%;
  padding:6px;
  border-radius: 5px;
  border: 1px solid #94a3b8;
  margin-top: 5px;
`
export const CheckboxContainer = styled.div`
   display: flex;
  flex-direction: row;
  align-items: center;
  margin: 12px;
`
export const Checkbox = styled.input`
  height: 15px;
  width: 15px;
  margin-right: 5px;
`
export const ShowPassword = styled.label`
  font-family:'Roboto';
  font-size: 15px;
  color:#1e293b;
`
