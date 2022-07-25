import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js'
import Dashboard from './pages/Dashboard.js';
import Contact from './pages/Contact'
import About from './pages/About'


// Styled components
import {StyledContainer} from "./components/Styles";

// Loader css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { BrowserRouter as Router, Route,}from 'react-router-dom';

function App() {
  return (
    <Router>
      <StyledContainer>
        
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Home} />
          <Route path= '/contact' component={Contact} />
          <Route path= '/about' component={About} />

        
      </StyledContainer>
      </Router>
        );
}

export default App;
