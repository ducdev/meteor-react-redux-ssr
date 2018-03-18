import React, { Component } from 'react'

export default class Index extends Component {

  componentWillMount() {
    this.props.history.push('/posts')
  }

  render() {
    return (
      <div>
        :)
      </div>
    )
  }
}
