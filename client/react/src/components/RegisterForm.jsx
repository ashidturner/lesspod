import React from 'react';
import { Link } from 'react-router-dom';

import LogoMin from './../assets/images/icon.png';
import LogoText from './../assets/images/type.png';
import { registerWithFirebase, addUserProfileToFbase } from '../api/firebase';
import userStore from '../stores/userStore';

const styles = {
  container: {
    width: '30%',
    minWidth: 350,
    flexDirection: 'column',
  },
  logoContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    textAlign: 'center',
    marginBottom: 15,
    backgroundImage: `url(${LogoMin})`,
    width: 60,
    height: 60,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  logoText: {
    textAlign: 'center',
    marginBottom: 15,
    backgroundImage: `url(${LogoText})`,
    width: 159,
    height: 47,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
    marginBottom: 25,
  },
};
class RegisterForm extends React.Component {
  state = {
    email: '',
    password: '',
  };

  onRegisterClick = () => {
    if (
      this.state.name &&
      this.state.password &&
      this.state.name.length > 4 &&
      this.state.password.length > 5 &&
      this.state.password === this.state.confirmPassword
    ) {
      registerWithFirebase(this.state.email, this.state.password).then(response => {
        const { error, data } = response;
        if (error) {
          console.log(error.message);
        } else {
          const profileData = {
            id: data.user.uid,
            email: this.state.email,
            first: this.state.name.split(' ')[0],
            last: this.state.name.split(' ')[1] ? this.state.name.split(' ')[1] : '',
          };
          addUserProfileToFbase(profileData).then(res => {
            if (res.error) {
              console.log(res.error.message);
            } else {
              userStore.profileData = res.data;
              this.props.history.push('/home');
            }
          });
        }
      });
    }
  };

  handleInputChange = event => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="box" style={styles.container}>
        {/* <div style={styles.logoContainer}>
          <div style={styles.logo} />
          <div style={styles.logoText} />
        </div> */}

        <div className="field">
          <label className="label">Full Name (First Last)</label>
          <div className="control has-icons-left">
            <input
              className="input"
              style={styles.borderless}
              type="name"
              id="name"
              name="name"
              placeholder="e.g. Alex Johnson"
              autoComplete="fullname"
              onChange={this.handleInputChange}
              required
            />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope" />
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left">
            <input
              className="input"
              style={styles.borderless}
              type="email"
              id="email"
              name="email"
              placeholder="e.g. alexjohnson@gmail.com"
              autoComplete="email"
              onChange={this.handleInputChange}
              required
            />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope" />
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="password"
              id="password"
              name="password"
              placeholder="********"
              onChange={this.handleInputChange}
              required
            />
            <span className="icon is-small is-left">
              <i className="fa fa-lock" />
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Retype Password</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="********"
              onChange={this.handleInputChange}
              required
            />
            <span className="icon is-small is-left">
              <i className="fa fa-lock" />
            </span>
          </div>
        </div>
        <div className="field is-grouped" style={{ marginTop: '2rem' }}>
          <div className="control">
            <div
              href="#"
              className="button is-info"
              onClick={() => {
                this.onRegisterClick();
              }}
            >
              CREATE ACCOUNT
            </div>
          </div>
          <div className="control">
            <Link to="/login">
              <div className="button is-text" style={{ textDecoration: 'none', color: '#0271D3' }}>
                LOGIN
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
