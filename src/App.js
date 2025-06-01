import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Add Font Awesome icons to the library
library.add(fab, fas);

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
