import React, { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import {
    Navbar,
    Nav,
    NavItem
} from 'reactstrap';

import './app.css'

const App = () => {


    const HomePage = React.lazy(() => import("HomeApp/HomePage"));
    const ContactPage = React.lazy(() => import("ContactApp/ContactPage"));

    return (
        <Router>
            <div>
                <p>Eu sou o componente PAI 9001</p>
                <Navbar color="light" light expand="md">
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contact">Contact</Link>
                        </NavItem>
                    </Nav>
                </Navbar>
                <Switch>
                    <Route exact path="/" >
                        <Suspense fallback={<div>Carregando...</div>}>
                            <HomePage />
                        </Suspense>
                    </Route>
                    <Route exact path="/contact" >
                        <Suspense fallback={<div>Carregando...</div>}>
                            <ContactPage />
                        </Suspense>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;