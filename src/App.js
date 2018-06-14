import React from 'react';
import { Impress, Step } from 'react-impressjs';

/* styles of react-impressjs */
import 'react-impressjs/styles/react-impressjs.css';
import './App.css';

const defaultDesplacement = 1000;

const App = () => (
  <Impress
    progress={true}
    fallbackMessage={<p>Lo sentimos, tu <b>dispositivo o navegador</b> no está soportado.</p>}
  >

    <Step className="slide">
      <div className="text-center">
        <h1>Slide 1</h1>
        <hr />
        <p>¡Hola desde slide 1!</p>
      </div>
    </Step>

    <Step className="slide" data={{ x: defaultDesplacement }}>
      <div className="text-center">
        <h1>Slide 2</h1>
        <hr />
        <p>¡Hola desde slide 2!</p>
      </div>
    </Step>

    <Step className="slide" data={{ x: defaultDesplacement * 2}} >
      <div className="text-center">
        <h1>Slide 3</h1>
        <hr />
        <p>¡Hola desde slide 3!</p>
      </div>
    </Step>
  </Impress>
);

export default App;
