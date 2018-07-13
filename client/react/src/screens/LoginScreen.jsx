import React from 'react';

import LoginForm from './../components/LoginForm';
import NavBar from '../components/Navbar';

class LoginScreen extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <section className="hero is-info" style={{ minHeight: 'calc(100vh - 6rem)' }}>
          <div className="hero-body">
            <div className="container ">
              <div className="columns is-centered">
                <div className="column is-5-tablet is-4-desktop is-4-widescreen">
                  <LoginForm history={this.props.history} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default LoginScreen;
