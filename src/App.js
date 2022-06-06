import React from 'react'
import { BrowserRouter} from "react-router-dom";
import { HeaderPage} from './components/HeaderPage'
import { FooterPage} from './components/FooterPage'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderPage/>
        <FooterPage/>
      </BrowserRouter>
    );
  }
}


export default App;