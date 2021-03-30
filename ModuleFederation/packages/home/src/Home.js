import React from 'react'
import { Jumbotron, Button } from 'reactstrap';

const Home = () => {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Olá Module Federation</h1>
                <hr className="my-2"/>
                <p>Este component é o 9002</p>
                <p className="lead">
                    <Button color="primary">Botão</Button>                    
                </p>
            </Jumbotron>
        </div>
    )
}
export default Home;