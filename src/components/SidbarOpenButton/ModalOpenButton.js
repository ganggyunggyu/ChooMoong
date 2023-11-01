/** @format */

import React from 'react';
import styled from './ModalOpenButton.module.css';
import ArrowRight from '../icon/ArrowRight';

export default function ModalOpenButton() {
  return (
    <button className={`${styled.Container}`}>
      <ArrowRight></ArrowRight>
    </button>
  );
}
