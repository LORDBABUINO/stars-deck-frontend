import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: white;
  padding: 15px;
  max-width: 700px;
  padding: 30px;
  margin: auto;
  margin-top: 80px;
  margin-bottom: 15px;

  input {
    display: block;
    margin-bottom: 5px;
    width: 100%;
    border: 1px solid #ddd;
    border-width: 1px;
    border-style: solid;
    border-color: #ddd;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-between;
  width: 40%;

  button {
    margin-top: 20px;
    color: white;
    background-color: #39a3db;
    padding: 10px;
    border-radius: 30px;
  }
`
