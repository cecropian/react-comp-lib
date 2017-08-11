import React from 'react';
import TextInputCSSmodules from 'ps-react/TextInputCSSmodules';

/** Required TextBox */
export default class ExampleTextInputCSSmodules extends React.Component {
  render() {
    return (
      <TextInputCSSmodules
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