import React, { Component } from 'react';
import HomeComponent from './components/home/HomeComponent'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* 使用首页的组件 */}
       <HomeComponent></HomeComponent>
      </div>
    );
  }
}

export default App;
