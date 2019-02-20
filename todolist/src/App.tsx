import * as React from 'react';

import { ToDoList } from './components/ToDoList';

class App extends React.Component {
  public render() {
    console.log(this.props);
    return (
      <div>
        <ToDoList/>
      </div>
    );
  }
}

export default App;
