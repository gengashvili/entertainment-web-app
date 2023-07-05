import styled from "styled-components";
import searchIcon from "../svgs/icon-search.svg";

export default function SearchBar({placeholder,inputValue,setInputValue}) {
  return (
    <StyledSearchBar>
      <img src={searchIcon} alt="" />
      <Input 
        placeholder={placeholder} 
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
      />
    </StyledSearchBar>
  );
}

const StyledSearchBar = styled.div`
  max-width: 100%;
  display: flex;
  margin: 24px 0;
  img {
    margin-right: 16px;
    width: 24px;
    height: 24px;
    @media(min-width:480px){
        width: 32px;
        height: 32px;
        margin-right:24px;
    }
  }
  @media(min-width:480px){
    margin: 33px 0;
  }
  @media(min-width:1024px){
    margin: 0 0 34px 0;
  }
`;

const Input = styled.input`
  width: 100%;
  background: none;
  border: none;
  font-weight: 300;
  font-size: 16px;
  color: #ffffff;
  @media(min-width:480px){
    font-size: 24px;
  }
  @media(min-width:1024px){
    padding-bottom:15px;
  }
  :focus {
    outline: none;
    @media(min-width:1024px){
        border-bottom: 1px solid #5A698F;
    }
  }
  ::placeholder {
    opacity: 0.5;
  }
`;
