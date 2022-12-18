import styled from 'styled-components';


export const Form = styled.form`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(78, 23, 141, 0.534);
  margin: 0 auto;
  width: 100%;
  padding: 10px;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;
export const Input = styled.input`
 padding: 10px;

  border-radius: 10px;
  font-size: 20px;
  margin-right: 0;
`; 
export const SearchBtn = styled.button`

  border-radius: 10px;
  margin-left: 10px;

  padding: 10px;

  font-size: 20px;
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: rgba(78, 23, 141, 0.644);
  }
`;