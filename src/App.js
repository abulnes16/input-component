import "./App.css";

import { Container, GridCell, GridContainer } from "./components/Containers";
import Input from "./components/Input";
import { InputTitle, Subtitle, Title } from "./components/Titles";

function App() {
  return (
    <Container direction="column">
      <Title>Dev Challenge Design System</Title>
      <Subtitle>Inputs</Subtitle>
      <GridContainer>
        <GridCell>
          <InputTitle>{"<Input />"}</InputTitle>
          <Input />
        </GridCell>
        <GridCell>
          <InputTitle>{"<Input error />"}</InputTitle>
          <Input error />
        </GridCell>
        <GridCell column="1 / 3">Icons</GridCell>
        <GridCell column="1 / 3">Size</GridCell>
        <GridCell column="1 / 3">Variants</GridCell>
      </GridContainer>
    </Container>
  );
}

export default App;
