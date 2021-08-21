import { useContext } from "react"
import {treesContext} from "./"

function App() {
    const {trees} = useContext(TreesContext)
    return(
        <div>
            <h1>Trees Ive heard of</h1>
            <ul>
                {trees.map((tree) => (
                <li key={tree.id}>{tree.type}</li>
                ))}
            </ul>
        </div>
    )
}