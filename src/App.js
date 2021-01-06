import "./App.css";

import { Container, GridCell, GridContainer } from "./components/Containers";
import Input from "./components/Input";
import { InputTitle, Subtitle, Title } from "./components/Titles";

import { MdPhone, MdLock } from "react-icons/md";

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
        <GridCell>
          <InputTitle>{"<Input disabled />"}</InputTitle>
          <Input disabled />
        </GridCell>

        <GridCell>
          <InputTitle>
            {"<Input helperText='Hi, this is a helper text'/>"}
          </InputTitle>
          <Input helperText="Hi, this is a helper text" />
        </GridCell>
        <GridCell>
          <InputTitle>
            {"<Input helperText='Hi, this is a helper text' error/>"}
          </InputTitle>
          <Input helperText="Hi, this is a helper text" error />
        </GridCell>
        <GridCell>
          <InputTitle>{"<Input value='Text'/>"}</InputTitle>
          <Input value="Text" />
        </GridCell>
        <GridCell>
          <InputTitle>{"<Input startIcon={<Phone/>}/>"}</InputTitle>
          <Input startIcon={<MdPhone size="2em" />} />
        </GridCell>
        <GridCell>
          <InputTitle>{"<Input endIcon={<Lock/>}/>"}</InputTitle>
          <Input endIcon={<MdLock size="2em" />} />
        </GridCell>
        <GridCell column="1 / 3">
          <GridContainer columns="repeat(2,1fr)">
            <GridCell>
              <InputTitle>{'<Input size="sm"/>'}</InputTitle>
              <Input size="sm" />
            </GridCell>
            <GridCell>
              <InputTitle>{'<Input size="sm"/>'}</InputTitle>
              <Input size="lg" />
            </GridCell>
          </GridContainer>
        </GridCell>
      </GridContainer>
    </Container>
  );
}

export default App;
