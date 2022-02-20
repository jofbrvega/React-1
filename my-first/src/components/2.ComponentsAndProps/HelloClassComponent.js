// Detta är en classcomponent
// Kortkommando är rce

import React, { Component } from 'react'

export class HelloClassComponent extends Component {
  render() {
    return (
        <div>Hello {this.props.name} from ClassComponent</div>
    )
  }
}

export default HelloClassComponent