import React from "react";

import styled, { css } from "styled-components";

const errorStyles = `
color: #d32f2f;
input {
  border-color: #d32f2f;
}
`;

const errorBlock = css`
  ${errorStyles}
  &:focus-within {
    ${errorStyles}
  }
`;
const InputWrapper = styled.div`
  color: #828282;
  outline: none;
  input {
    border: 1px solid #828282;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 2em 1em;
    outline: none;
    width: 100%;
    height: 30px;
    font-size: 14px;
  }

  &:hover {
    color: #333;
    input {
      border-color: #333;
    }
  }

  &:focus-within {
    color: #2962ff;
    input {
      border-color: #2962ff;
    }
  }

  ${(props) => (props.error ? errorBlock : "")}
`;

const Input = (props) => {
  const { error } = props;

  return (
    <InputWrapper error={error}>
      <label>{props.label || "Label"}</label>
      <input placeholder={props.placeholder || "Placeholder"} />
    </InputWrapper>
  );
};

export default Input;
