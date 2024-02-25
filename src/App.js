import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/pages/Home';
import Sobremim from './components/pages/Sobremim';
import Blog from './components/pages/Blog';

import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Container customClass="min-height">
          <Switch>
            <Route exact path="/Sobremim">
              <Sobremim />
            </Route>
            <Route exact path="/Blog">
              <Blog />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
