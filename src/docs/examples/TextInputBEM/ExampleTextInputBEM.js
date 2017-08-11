import React from 'react';
import TextInputBEM from 'ps-react/TextInputBEM';

/** Required TextBox */
export default class ExampleTextInputBEM extends React.Component {
  render() {
    return (
      <TextInputBEM
        htmlId="big_dog"
        required={true}
        label="Given Name"
        placeholder="Eric"
        name="lastname"
        onChange={() => {}}
        error="Given name is required"
      />
    )
  }
}