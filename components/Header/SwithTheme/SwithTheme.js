import Container from "./styles.js";

function SwithTheme({ setThemeDark, themeDark }) {
  return (
    <Container onClick={() => setThemeDark((state) => !state)}>
      <input type="checkbox" checked={!themeDark} />
    </Container>
  );
}

export default SwithTheme;
