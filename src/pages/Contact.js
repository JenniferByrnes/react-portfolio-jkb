import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import { Grid, TextField } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import ModeCommentTwoToneIcon from '@mui/icons-material/ModeCommentTwoTone';


const SERVICE_ID = "service_ahz5iig";
const TEMPLATE_ID = "template_zb9eoya";
const USER_ID = "6OX_BEPjn0TS8Fxqn";

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`A ${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });

      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully'
          })
        }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Oops, something went wrong',
            text: error.text,
          })
        });
      e.target.reset()
    }
  }

  return (
    <Container>
      <h1 className="my-2">Contact me</h1>
      <div className="flex-wrap justify-center">
      <Card style={{ width: '18rem' }} className="justify-center p-2">
        <Grid id="contact-form" onSubmit={handleSubmit}>

          <Grid>
            <TextField type="text" defaultValue={name} onBlur={handleChange} name='user_name'
              icon="user circle"
              iconPosition="left"
              placeholder="Name"
            />
          </Grid>
          <Grid>
            <TextField type='email' defaultValue={email} onBlur={handleChange} name='user_email'
              icon="mail"
              iconPosition="left"
              placeholder="Email"
            />
          </Grid>
          <Grid>
            <TextField
              id="messageText"
              type="textarea"
              name='user_message'
              defaultValue={message}
              onBlur={handleChange}
              rows="5"
              placeholder="Message"
            />
          </Grid>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <Button type="submit">Submit</Button>
          <br/>
        </Grid>
        <br/>
      </Card>
      <br/>
      </div>
      <br/>
    </Container>
  );
}