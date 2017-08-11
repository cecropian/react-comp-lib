import React from 'react';
import TextInputStyledComps from 'ps-react/TextInputStyledComps';

/** Required TextBox */
export default class ExampleTextInputStyledComps extends React.Component {
  render() {
    return (
      <TextInputStyledComps
        htmlId="big_dog"
        required={true}
        label="Given Name"
        placeholder="Eric"
        name="lastname"
        onChange={() => {}}
      />
    )
  }
}