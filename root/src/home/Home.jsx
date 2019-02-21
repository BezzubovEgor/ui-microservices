import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

export const Home = () => (
  <Jumbotron>
    <h1 className="display-3">This is home page of ui-microservices example!</h1>
    <p className="lead">This is simple example to show you how developers can create microservices on ui and using different technologies and frameworks.</p>
    <hr className="my-2" />
    <p>There are we have 3 examples, one on <b className="text-primary">react</b>, <b className="text-danger">angular</b> and <b className="text-success">vue</b>.</p>
    <p className="lead text-center">
      <a href="#react-service" className="mr-2"><Button color="primary" to>React ToDo list service</Button></a>
      <a href="#angular-service" className="mr-2"><Button color="danger" to>Angular feedback service</Button></a>
      <a href="#vue-service"><Button color="success" to>Vue logging service</Button></a>
    </p>
  </Jumbotron>
)