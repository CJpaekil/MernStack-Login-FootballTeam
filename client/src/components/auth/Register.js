// import React, { Component } from 'react';
import React, { useState, useContext, useEffect, Component} from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

import {
  MDBContainer,
  MDBCol,
  MDBInput
} from 'mdbreact';

import SectionContainer from '../sectionContainer';
const Register = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;
  var sectionStyle = {
    width: "500px",
    margin: "6rem auto",
    overflow: "hidden",
    padding: "0 2rem"
  };
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    alert('ok');
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({
        name,
        email,
        password
      });
    }
  };

  return (
    <MDBContainer className='' style={sectionStyle}>
        <SectionContainer header='Account Register' className='' noBorder>
          <MDBCol md='12'>
            <SectionContainer>
              <form onSubmit={onSubmit}>
                {/* <p className='h5 text-center mb-4'>Sign up</p> */}
                <div className='grey-text'>
                  <MDBInput
                    id='name'
                    type='text'
                    label='name'
                    icon='user'
                    name='name'
                    value={name}
                    onChange={onChange}
                    required
                  />
                  <MDBInput
                    id='email'
                    type='text'
                    label='email'
                    icon='envelope'
                    name='email'
                    value={email}
                    onChange={onChange}
                    required
                  />
                    <MDBInput
                    id='password'
                    type='password'
                    label='password'
                    icon='lock'
                    name='password'
                    value={password}
                    onChange={onChange}
                    required
                    minLength='6'
                  />
                  <MDBInput
                    id='password2'
                    type='password'
                    label='Confirm password'
                    icon='exclamation-triangle'
                    name='password2'
                    value={password2}
                    onChange={onChange}
                    required
                    minLength='6'
                  />

                </div>
                <div className='text-center'>
                <input
                  type='submit'
                  value='Register'
                  className='btn btn-primary btn-block'
                />
                </div>
              </form>
            </SectionContainer>
          </MDBCol>
          
        </SectionContainer>
      </MDBContainer>
  );
};

export default Register;