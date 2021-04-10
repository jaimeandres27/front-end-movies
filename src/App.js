import './App.css';
import NavBar from './components/NavBar';
import Table from './components/Table';

function App() {

  const texto = <h1>"Mi Videoteca -Jaime Echavarría"</h1>;

  return (
    <div className="container">
       <NavBar titulo={texto}/>
       <Table />
    </div>
  );
}

export default App;