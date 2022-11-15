import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_65dm14q', 'template_z1ehc4n', form.current, 'GBJnyolhTkQUyrJ8k')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="mx-auto mt-12 max-w-3xl text-center">


      <div className="mb-8 flex gap-8">
        <Input required type="text" name="user_name" variant="standard" size="lg" label="Ad" />
        <Input required type="email" name="user_email" variant="standard" size="lg" label="Email Address" />
      </div>
      <Textarea required name="message" variant="standard" size="lg" label="Tam olaraq nə istədiyini yaza və ya boş buraxa bilərsən" rows={8} />
      <Button type="submit" value="Send" variant="gradient" size="lg" className="mt-8">
        Göndər
      </Button>
      
      {/* <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" /> */}
    </form>
  );
};
