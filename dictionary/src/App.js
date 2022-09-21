//Components
import MainPage from './components/Main';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';


//Styles
import './App.css';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';



function App() {
  
  const name = "Joaquim"
  return (
    <div className="App">
      <h1>Dictionary</h1>
      {/* <MainPage />
      <TemplateExpressions />
      <MyComponent />
      <Events /> */}
      {/* <Challenge /> */}
      {/* <ManageData />
      <ListRender />
      <ConditionalRender /> */}
      <ShowUserName name = {name}/>
    </div>
  );
}

export default App;
