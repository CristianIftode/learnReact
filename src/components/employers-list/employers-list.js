import Employserslistitem from "../employers-list-item/employers-list-item"
import './employers-list.css'



const EmployersList = ({data}) =>{

   const personear = data.map(item => {
        const {id, ...itemProps} = item
        return(
        <Employserslistitem key={id} {...itemProps}/>
        )
    })

    return(
        <ul className="app-list list-group">
            {personear}
        </ul>
    )
}


export default EmployersList;