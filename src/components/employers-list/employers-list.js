import Employserslistitem from "../employers-list-item/employers-list-item"
import './employers-list.css'

const EmployersList = () =>{
    return(
        <ul className="app-list list-group">
            <Employserslistitem />
            <Employserslistitem />
            <Employserslistitem />
        </ul>
    )
}


export default EmployersList;