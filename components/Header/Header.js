import Link from "next/link";
import React from "react";
import Container from "./styles";
import SwithTheme from "./SwithTheme/SwithTheme";

function Header({ title, inPost, setThemeDark, themeDark }) {
  return (
    <Container inPost={inPost}>
      {inPost ? (
        <h3>
          <Link href="/">
            <a>{title}</a>
          </Link>
        </h3>
      ) : (
        <h1>
          <Link href="/">
            <a>{title}</a>
          </Link>
        </h1>
      )}
      <SwithTheme setThemeDark={setThemeDark} themeDark={themeDark} />
    </Container>
  );
}

export default Header;
