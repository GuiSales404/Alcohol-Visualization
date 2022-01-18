import './App.css';
import MyMap  from './components/MyMap';
import BarChart from './components/BarChart/index.Js';

function App() {
  return (
    <div className="App">
      <div className="introPage">
        <div className="Title">
          <h1>CONSUMO DE</h1>
          <h1 className="alcohol">ÁLCOOL</h1>   
          <div className="Subtitle">
            <h2>PRAY FOR ALCOHOLICS</h2>
          </div>
        </div>
        <div className="turma">
          <p>2021.2 Data Visualization</p>
          <div className="nomesAlunos">
            <p>Al.Bruna Maia - 499257</p>
            <p>Al.Guilherme Sales - 499756</p>
            <p>Al.Luiza Clara - 493478</p>
          </div>
        </div>
        {/* <div className="foot-bar"> SETA </div>  */}
        </div>
      <div className="dotsVisu"> <MyMap/> </div>
      <div className="charts">
        <div className="barChart">
          <BarChart/>
        </div>
      </div>
    </div>
  );
}

export default App;
