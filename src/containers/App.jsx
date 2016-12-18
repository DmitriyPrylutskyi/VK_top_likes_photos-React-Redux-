/**
 * Created by Dmitriy Prilutsky on 15.12.2016.
 */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/User.jsx'
import Page from '../components/Page.jsx'
import * as pageActions from '../actions/PageActions.jsx'
import * as userActions from '../actions/UserActions.jsx'

class App extends Component {
  render() {
    const { user, page } = this.props
    const { getPhotos } = this.props.pageActions
    const { handleLogin } = this.props.userActions

    return <div className='row'>
      <Page photos={page.photos} year={page.year} getPhotos={getPhotos} fetching={page.fetching} error={page.error}/>
      <User name={user.name} handleLogin={handleLogin} error={user.error} />
    </div>
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
    page: state.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)