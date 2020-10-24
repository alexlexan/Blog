import styled from "styled-components";

export default styled.header`
  display: flex;
  margin-bottom: 2.625rem;
  justify-content: space-between;

  h1 {
    font-size: 2rem;
    line-height: 2.625rem;
    margin-bottom: 0px;
    margin-top: 0px;
    a {
      color: var(--textTitle);
      box-shadow: none;
    }
  }

  h3 {
    margin-bottom: 0px;
    margin-top: 0px;
    height: 42px;
    line-height: 2.625rem;
    a {
      color: rgb(255, 167, 196);
      font-family: Montserrat, sans-serif;
      box-shadow: none;
    }
  }
`;
