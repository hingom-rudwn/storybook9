import styled from "@emotion/styled";
import type { ButtonProps } from "./Button";
import { css } from "@emotion/react";

export const ButtonStyle = styled.button<ButtonProps>`
  &:disabled {
    background: #d9d9d9;
    color: #a8a8a8;
    pointer-events: none;
    border-color: #d9d9d9;
  }
  ${props => props.full && css`
    width: 100%;
    text-align: center;
  `}
  ${props => props.$loading && css`
    pointer-events: none;
  `}

  ${props => props.$radius === 'default' && css`
    border-radius: 6px;
  `}
  ${props => props.$radius === 'bordered' && css`
    border-radius: 10vw;
  `}

  ${props => props.size === 'xlarge' && css`
    height: 56px;
    padding: 0 16px;
    font-size: 16px;
    font-size: 16px;
  `}
  ${props => props.size === 'large' && css`
    height: 48px;
    padding: 0 16px;
    font-size: 14px;
  `}
  ${props => props.size === 'medium' && css`
    height: 44px;
    padding: 0 16px;
    font-size: 14px;
  `}
  ${props => props.size === 'small' && css`
    height: 36px;
    padding: 0 12px;
    font-size: 14px;
  `}
  ${props => props.size === 'xsmall' && css`
    height: 24px;
    padding: 0 8px;
    font-size: 12px;
  `}


  ${props => props.theme === 'primary' && css` 
    background: #423b7f;
    color: #fff;
    &:hover {
      background: #686299;
    }
  `}
  ${props => props.theme === 'secondary' && css`
    background: #090909;
    color: #fff;
    &:hover {
      background: #3a3a3a;
    }
  `}
  ${props => props.theme === 'tertiary' && css`
    background: #f7f7f9;
    color: #505050;
    &:hover {
      background: #f9f9fa;
    }
  `}
  ${props => props.theme === 'line1' && css`
    border: 1px solid #423B7F;
    color: #423B7F;
    background: #fff;
    &:hover {
      background: #edecf3;
    }
  `}
  ${props => props.theme === 'line2' && css`
    border: 1px solid #505050;
    color: #505050;
    background: #fff;
    &:hover {
      background: #f7f7f9;
    }
  `}
  ${props => props.theme === 'noline' && css`
    border: 1px solid #f7f7f9;
    color: #505050;
    &:hover {
      background: #f7f7f9;
    }
  `}
  ${props => props.theme === 'text' && css`
    text-decoration: underline;
    color: #505050;
    text-underline-offset : 2px;
  `}
`