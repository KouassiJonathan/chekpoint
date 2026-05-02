import React from 'react';
import { Card } from 'react-bootstrap';

import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

function App() {

  const firstName = "Jonathan"; // change ou laisse vide ""

  return (
    <div className="d-flex flex-column align-items-center mt-5">

      <Card style={{ width: '18rem' }} className="p-3 shadow">
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      {/* Message */}
      <div className="mt-4 text-center">
        <h3>
          Bonjour {firstName ? firstName : "!"}
        </h3>

        {/* Image conditionnelle */}
        {firstName && (
          <img
            src="https://via.placeholder.com/150"
            alt="profil"
            className="rounded-circle mt-3"
          />
        )}
      </div>

    </div>
  );
}

export default App;