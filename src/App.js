import React from 'react';
import { Impress, Step } from 'react-impressjs';

/* styles of react-impressjs */
import 'react-impressjs/styles/react-impressjs.css';

const App = () => (
  <Impress
    progress={true}
    fallbackMessage={<p>Lo sentimos, tu <b>dispositivo o navegador</b> no está soportado.</p>}
  >
    <Step className="slide" id="its-in-3d">
      <h1>Hola mundo</h1>
      <hr />
      <p>¡React e Impressjs!</p>
    </Step>
  </Impress>
);

export default App;
