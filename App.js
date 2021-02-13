import { render } from 'react-dom';
import './App.css';
import {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import Greet from './components/Greet';
// import Messages from './components/Messages';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import Form from './components/Form';
import PhoneSigin from './components/PhoneSigin';
import EmailSignin from './components/EmailSignin';
import FirstPage from './components/FirstPage';
class App extends Component {
  render(){
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={FirstPage}/>
          <Route path="/PhoneSigin" component={PhoneSigin}/>
          <Route path="/EmailSignin" component={EmailSignin}/>
        </Switch>
      </div>
    </Router>
  );
  }
}

export default App;

  {/* <Greet name="Aryan"/>
        <Greet name="Kartik"/>
        <Greet name="Sapra"/>
        <Messages />
        <Counter />
        <FunctionClick />
        <ClassClick />
        <EventBind />
        <ParentComponent />
        <UserGreeting />
        <Form /> */}