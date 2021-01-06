import "./App.css";

import { Container, GridCell, GridContainer } from "./components/Containers";
import { Subtitle, Title } from "./components/Titles";

function App() {
  return (
    <Container direction="column">
      <Title>Dev Challenge Design System</Title>
      <Subtitle>Inputs</Subtitle>
      <GridContainer>
        <GridCell>Default input</GridCell>
        <GridCell>Error state</GridCell>
        <GridCell column="1 / 3">Icons</GridCell>
        <GridCell column="1 / 3">Size</GridCell>
        <GridCell column="1 / 3">Variants</GridCell>
      </GridContainer>
    </Container>
  );
}

export default App;
