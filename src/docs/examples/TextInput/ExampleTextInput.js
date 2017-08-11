import React from 'react';
import TextInput from 'ps-react/TextInput';

/** Required TextBox */
export default class ExampleTextInput extends React.Component {
  render() {
    return (
      <TextInput
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