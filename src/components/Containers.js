import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify || "center"};
  align-items: center;
  flex-direction: ${(props) => props.direction || "row"};
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: ${(props) => props.rows || "120px"};
  grid-template-columns: ${(props) => props.columns || "repeat(3,1fr)"};
  gap: ${(props) => props.gap || "40px"};
`;

export const GridCell = styled.div`
  grid-column: ${(props) => props.column || "auto"};
  grid-row: ${(props) => props.rows || "auto"};
`;
