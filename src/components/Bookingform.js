import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function BookingForm() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [language, setLanguage] = useState('');
  const [tickets, setTickets] = useState('');
  const [day, setDay ]= useState('');
  

  

  const handleSubmit = event => {
    event.preventDefault();
    console.log('First Name:', fname);
    console.log('Email:', email);
    console.log('Phone:', phone);
    setFname('');
    setEmail('');
    setLname('');
    setPhone('');
    setAddress('');
    setLanguage('');
    setTickets('');
    setDay('');

  const formData = {fname,lname, email, phone, address, language, tickets, day};

  const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];

  existingBookings.push(formData);

  // save updated bookings to local storage
  localStorage.setItem('bookings', JSON.stringify(existingBookings));
};

  return (
   <>
    <Form className='p-5' onSubmit={handleSubmit} >
    <Row className="mb-3">
      <Form.Group as={Col} controlId="fname" onChange={event => setFname(event.target.value)}>
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" />
      </Form.Group>

      <Form.Group as={Col} controlId="lname" onChange={event => setLname(event.target.value)}>
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="email" onChange={event => setEmail(event.target.value)}>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group as={Col} controlId="phone" onChange={event => setPhone(event.target.value)}>
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="number" placeholder="12345" />
      </Form.Group>
    </Row>

    <Form.Group className="mb-3" controlId="address" onChange={event => setAddress(event.target.value)}>
      <Form.Label>Address</Form.Label>
      <Form.Control placeholder="1234 Main St" />
    </Form.Group>

    <Row className="mb-3">
      <Form.Group as={Col} controlId="language" onChange={event => setLanguage(event.target.value)}>
        <Form.Label>Language</Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group as={Col} controlId="tickets" onChange={event => setTickets(event.target.value)}>
        <Form.Label>No of Tickets</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>Choose...</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
      </Form.Group>

      <Form.Group as={Col} controlId="day" onChange={event => setDay(event.target.value)}> 
        <Form.Label>Day</Form.Label>
        <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
          <option>Saturday</option>
          <option>Sunday</option>
          </Form.Select>
      </Form.Group>
    </Row>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
    
    
    </>
  );
}

export default BookingForm;


