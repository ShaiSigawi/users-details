import './App.css';
import data from "./data.json"
import Table from './table';

function App(){
  const getHeadings = () =>{
    return Object.keys(data[0])
  }

  return (
    <div className="App">
      <h1>Users Details</h1>
      <Table theadData={getHeadings()} tbodyData={data}/>
      <h3>Add name users</h3>
      <input type/>
      <h3>Add Email users</h3>
      <input type/>

    </div>
  )
}
export default App
