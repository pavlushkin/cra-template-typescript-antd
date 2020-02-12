import React from 'react';
import { Button } from 'antd';
import styles from './Button.module.css';
import { TestComponent } from './components/buttons';
import { Header } from './components/header';



const App = () => {
  return (
    <div className="App">
      <Header />
      <h1>App</h1>
      <Button type="primary">Button 1</Button>
      <hr />
      <Button type="primary" className={styles.error}>Button 2</Button>
      <hr />
      <Button>Button 3</Button>
      <hr />
      <TestComponent />
    </div>
  );
}

export default App;
