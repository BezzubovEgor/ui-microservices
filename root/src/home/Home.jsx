import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

export const Home = () => (
  <Jumbotron>
    <h1 className="display-3">This is home page of ui-microservices example!</h1>
    <p className="lead">This is simple example to show you how developers can create microservices on ui and using different technologies and frameworks.</p>
    <hr className="my-2" />
    <p>There are we have thwo example, one on react + typescript and other is on angular.</p>
    <p className="lead">
      <a href="#todolist"><Button color="primary" to>ToDo list react</Button></a>
    </p>
  </Jumbotron>
)