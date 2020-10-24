import styled from "styled-components";

export default styled.div`
  display: flex;

  img {
    margin-right: 0.875rem;
    margin-bottom: 0px;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }
  a {
    box-shadow: 0 1px 0 0 currentColor;
    color: var(--textLink);
    text-decoration: none;
    :hover {
      box-shadow: none;
    }
  }
  p {
    max-width: 310px;
  }
`;
