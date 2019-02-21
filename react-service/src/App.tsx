import * as React from 'react';

import { ToDoList } from './components/ToDoList';

class App extends React.Component {
  public render() {
    return (
      <div>
        <ToDoList/>
      </div>
    );
  }
}

export default App;
