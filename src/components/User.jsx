/**
 * Created by Dmitriy Prilutsky on 16.12.2016.
 */
import React, { PropTypes, Component } from 'react'

export default class User extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    handleLogin: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
  }

  render() {
    const { name, error } = this.props
    let template

    if (name) {
      template = <div><span className='label label-success'>Привет, {name}!</span><button className='btn btn-exit' onClick={this.props.handleLogin}>Выйти</button></div>
    } else {

      template = <button className='btn' onClick={this.props.handleLogin}>Войти</button>
    }
    return <div className='ib user'>
      {template}
      {error ? <span className='label label-danger'>{error}</span> : ''}
    </div>
  }
}