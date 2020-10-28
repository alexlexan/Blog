import Container from "./styles.js";

function SwithTheme({ setThemeDark, themeDark }) {
  return (
    <Container>
      <input
        onClick={() => setThemeDark((state) => !state)}
        type="checkbox"
        defaultChecked={!themeDark}
      />
    </Container>
  );
}

export default SwithTheme;
