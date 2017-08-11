import React from 'react';
import ProgressBar from 'ps-react/ProgressBar';

/** 10% progress, 15 height, 500 width */
export default function Example75Percent() {
  return <ProgressBar height={15} width={500} percent={75} />
}