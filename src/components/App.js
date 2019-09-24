import React from 'react';
import Bio from './Bio';

import Header from './Header';
import TabbedContent from './TabbedContent';
import Decoration from './Decoration';

function App() {
  return (
    <div className="App">
      <Header/>
      <Bio/>
      <TabbedContent />
      <Decoration />
    </div>
  );
}

export default App;
