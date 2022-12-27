import './App.css';
import data from "./data.json"
import Table from './table';

function App(){

  const getHeadings = () =>{
    return Object.keys(data[0])
  }

  const handleAddFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...getHeadings };
    newFormData[fieldName] = fieldValue;
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();

};

  return (
    <div className="App">
      <h1>Users Details</h1>
      <Table theadData={getHeadings()} tbodyData={data}/>
      
      <h3>Add new details users:</h3>
      <form onSubmit={handleAddFormSubmit}>
        <input
        type = "text"
        name='name'
        required = 'required'
        placeholder='Enter a name'
        onChange={handleAddFormChange}
        />

        <input
        type = "text"
        name='email'
        required = 'required'
        placeholder='Enter an email'
        onChange={handleAddFormChange}
        />

        <button type='submit'>Add the deails</button>
      </form>

      

    </div>
  )
}
export default App
