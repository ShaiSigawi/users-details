import data from "./data.json"
import './App.css';

export default function Table({tbodyData}) {
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