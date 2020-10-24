import styled from "styled-components";

export default styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 42rem;
  padding: 2.625rem 1.3125rem;

  h1 {
    font-size: 2.5rem;
    line-height: 1.1;
  }

  p {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.75rem;
  }
`;

export const Article = styled.div`
  p b {
    font-weight: 700;
  }
  .prismjs {
    background: #011627;
    border-radius: 10px;
    padding: 20px;
    color: #fff;
    margin-right: -1.3125rem;
    margin-left: -1.3125rem;
    code {
      text-shadow: none !important;
      span {
        color: #fff;
      }
    }
    p b {
      font-weight: 700;
    }
  }
  .token.maybe-class-name {
    color: #fff;
  }
  .token.boolean {
    color: #ff5874;
  }
  .token.class-name {
    color: #ffcb8b;
  }
  .token.builtin,
  .token.char,
  .token.constant,
  .token.function {
    color: #82aaff;
  }
  .token.punctuation {
    color: #c792ea;
  }
  .token.parameter {
    color: #fff;
  }
  .token.comment {
    color: #809393;
  }
  .token.keyword,
  .token.operator,
  .token.tag {
    color: #ffa7c4;
  }
  .code {
    margin-bottom: 20px;
  }

  i {
    border-radius: 0.3em;
    background: var(--inlineCode-bg);
    color: var(--inlineCode-text);
    padding: 0.15em 0.2em 0.05em;
    white-space: normal;
    font-size: 1rem;
    font-family: Consolas, Menlo, Monaco, source-code-pro, Courier New,
      monospace;
  }
`;

export const Title = styled.div`
  margin-bottom: 20px;
`;

export const Links = styled.div`
  margin-bottom: 30px;
  h3 {
    margin-bottom: 10px;
    font-family: "Montserrat", sans-serif;
    color: var(--textLink);
  }
  p {
    margin-bottom: 5px;
  }
`;
