import React from 'react';
import './App.css';
import Items from './components/items';


class App extends React.Component{
  render(){
    const items = [
      'jack',
      'Alvin',
      'Alex'
    ]
    return(
      <>
      <Items items={items}/>
      </>
    )
  }
  
}

export default App;
