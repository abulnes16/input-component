import React from "react";

import styled, { css } from "styled-components";

const errorStyles = `
color: #d32f2f;
.input-container {
  border-color: #d32f2f;
}
`;

const errorBlock = css`
  ${errorStyles}
  &:focus-within {
    ${errorStyles}
  }
`;

const disabledStyles = css`
  .input-container {
    background-color: #f2f2f2;
    border-color: #e0e0e0;
  }

  &:hover {
    color: #828282;
    .input-container {
      border-color: #e0e0e0;
    }
  }
`;
const InputWrapper = styled.div`
  color: #828282;
  outline: none;

  .input-container {
    display: flex;
    align-items: center;
    border: 1px solid #828282;
    box-sizing: border-box;
    border-radius: 8px;
    padding: ${(props) => {
      switch (props.size) {
        case "sm":
          return "1.4em 0.8em";
        case "lg":
          return "2.2em 1.2em";
        default:
          return "2em 1em";
      }
    }};
    outline: none;
    width: ${(props) => (props.fullWidth ? "100%" : "200px")};
    height: ${(props) => props.multiline || "30px"};
    font-size: 14px;
  }

  .helper {
    font-size: 10px;
  }

  input,
  textarea {
    border: none;
    outline: none;
    font-size: 14px;
    width: 100%;
  }
  input {
    height: 30px;
  }
  &:hover {
    color: #333;
    .input-container {
      border-color: #333;
    }
  }

  &:focus-within {
    color: #2962ff;
    .input-container {
      border-color: #2962ff;
    }
  }

  ${(props) => (props.error ? errorBlock : "")}

  ${(props) => (props.disabled ? disabledStyles : "")}
`;

const Input = (props) => {
  const {
    error,
    disabled,
    size = "",
    placeholder = "",
    helperText = "",
    startIcon = "",
    endIcon = "",
    fullWidth = false,
    multiline = false,
    rows = "",
    ...inputProps
  } = props;

  return (
    <InputWrapper
      fullWidth={fullWidth}
      error={error}
      disabled={disabled}
      size={size}
      multiline={multiline}
    >
      <label>{props.label || "Label"}</label>
      <div className="input-container">
        {startIcon && <span className="startIcon">{startIcon}</span>}
        {multiline ? (
          <textarea
            {...inputProps}
            placeholder={placeholder || "Placeholder"}
            disabled={disabled}
            rows={rows}
          ></textarea>
        ) : (
          <input
            {...inputProps}
            placeholder={placeholder || "Placeholder"}
            disabled={disabled}
          />
        )}
        {endIcon && <span className="endIcon">{endIcon}</span>}
      </div>
      {helperText && <div className="helper">{helperText}</div>}
    </InputWrapper>
  );
};

export default Input;
