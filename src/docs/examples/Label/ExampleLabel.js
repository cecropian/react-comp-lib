import React from 'react';
import Label from 'ps-react/Label';

/** Required label */
export default function ExampleLabel() {
  return <Label htmlFor="big_dog" required={true} label="This is my standardized label" />
}