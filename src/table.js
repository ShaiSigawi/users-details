import './App.css';

function Table({tbodyData}) {

    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            
            <tbody>
                {tbodyData.map((row) => {
                    return (
                        <tr>
                            <td>{row.name}</td>
                            <td>{row.email}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        
)
}
export default Table;