import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Screen2() {
  const { id } = useParams();
  const [summary, setSummary] = useState('');

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(response => response.json())
      .then(data => setSummary(data.summary));
  }, [id]);

  return (
    <div>
      <Card className="text-center">
        <Card.Header>Summary</Card.Header>
        <Card.Body>
          <Card.Text>
            {summary}
          </Card.Text>
          <Link to='/BookingForm'>
            <Button variant="primary">book a ticket</Button>
          </Link>

        </Card.Body>

      </Card>

    </div>

  );
}

export default Screen2;

