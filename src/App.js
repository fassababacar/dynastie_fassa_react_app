import React from 'react'
import { HashRouter} from "react-router-dom";
import { HeaderPage} from './components/HeaderPage'
import { FooterPage} from './components/FooterPage'


class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <HeaderPage/>
        <FooterPage/>
      </HashRouter>
    );
  }
}


export default App;