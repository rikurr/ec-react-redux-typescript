import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';

const FlotingAlerts = styled.div`
  display: block;
`;

const floatingAlert = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;
    transform: translateX(-50%) scale(1.2);
  }
  9% {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) scale(1);
  }
  91% {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) scale(1);
  }
  100% {
    opacity: 0;
    visibility: hidden;
    transform: translateX(-50%) scale(1.2);
  }
`;
const Alert = styled.div`
  display: none;
  position: absolute;
  z-index: 999;
  top: 38px;
  left: 50%;
  transform: translateX(-50%);
  -moz-animation: ${floatingAlert} ease-in 5s forwards;
  -webkit-animation: ${floatingAlert} ease-in 5s forwards;
  -o-animation: ${floatingAlert} ease-in 5s forwards;
  animation: ${floatingAlert} ease-in 5s forwards;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  text-align: center;
  background: ${p => p.theme.primaryColor};
  padding: 10px 40px;
  border-radius: 6px;
  color: ${p => p.theme.subText};
  :last-of-type {
    display: block;
  }
`;

type MessageProps = {
  messages: string[];
};

const FlashMessages: FC<MessageProps> = ({ messages }) => {
  return (
    <FlotingAlerts>
      {messages.map((msg, i) => {
        return <Alert key={i}>{msg}</Alert>;
      })}
    </FlotingAlerts>
  );
};

export { FlashMessages };
