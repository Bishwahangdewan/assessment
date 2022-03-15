import React from 'react';

import Header from './Components/Header/Header.component';
import Showcase from './Components/Showcase/Showcase.component';
import Partner from './Components/Partner/Partner.component';

function App() {
  return (
    <div className="App">
      <section className="hero-section">
        <Header />
        <Showcase />
      </section>

      <section>
        <Partner />
      </section>
    </div>
  );
}

export default App;
