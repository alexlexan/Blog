import Container from "./styles";

function Description({ avatar }) {
  return (
    <aside>
      <Container>
        <img src={avatar.url.url} alt="Alex Milutkin" />
        <p>
          Личный блог{" "}
          <a href="https://github.com/alexlexan">Алексея Милюткина</a>.{" "}
          {avatar.description}
        </p>
      </Container>
    </aside>
  );
}

export default Description;
