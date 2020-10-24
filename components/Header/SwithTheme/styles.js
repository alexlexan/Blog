import styled from "styled-components";

export default styled.div`
  input:hover {
    cursor: pointer;
  }
  input[type="checkbox"] {
    position: relative;
    width: 50px;
    height: 24px;
    padding: 0;
    border-radius: 30px;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: var(--pink);
    outline: none;
    transition: 0.5s;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  }

  input:checked[type="checkbox"] {
    background: #011627;
  }

  input[type="checkbox"]:before {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 0;
    top: 0;
    background: #fff;
    transition: 0.5s;
    transform: scale(1.1);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  input:checked[type="checkbox"]:before {
    left: 26px;
  }
`;
