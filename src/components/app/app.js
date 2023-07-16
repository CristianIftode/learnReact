import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employers-add-form/employers-add-form';
import './app.css';
import { Component } from 'react';



class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            datasalar: [
                {
                    name: "John C.",
                    salary: 800,
                    increase: true,
                    liked: false,
                    id: 1
                },
                {
                    name: "Alex M.",
                    salary: 4000,
                    increase: false,
                    liked: false,
                    id: 2
                },
                {
                    name: "Carl W.",
                    salary: 5000,
                    increase: false,
                    liked: false,
                    id: 3
                }
            ],
            term : '',
            filterpos: 'all'
        }
        this.maxid = 4;
    }

    deldata = (id) =>{
        this.setState(({datasalar}) => {return({datasalar: datasalar.filter(item=>item.id !== id)})})
    }

    adddata = (name, salary, e) =>{
        e.preventDefault();
        
        this.setState(({datasalar}) => {
            let newArr = [...datasalar, {name: name, salary: salary, increase: false, liked: false, id: this.maxid}]
            
            return({datasalar: newArr})})
        this.maxid++
    }

    onToggleProp = (id, prop) =>{
        this.setState(({datasalar})=>({datasalar:  datasalar.map(item=>{
                if(item.id === id){
                    item[prop] = !item[prop]
                }
                return item
            })
        }))
    }

    serchEmp = (items, term) =>{
        if (term.length === 0){
            return items;
        }

        return items.filter(item=>{
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) =>{
        this.setState({term});
    }

    addFilterData = (items, filterpos)=>{
        if (filterpos === "all"){
            return items
        }
        if(filterpos === "toUpper"){
            return items.filter(item=>{
                return item.increase !== false
            })
        }
        if(filterpos === "bigsallar"){
            return items.filter(item=>{
                return item.salary > 1000
            })
        }
    }

    onUpdateFilterTarget = (filterpos) =>{
        this.setState({filterpos});
    }

    render(){        
        const {datasalar, term, filterpos} = this.state
        const visibleData = this.serchEmp(datasalar, term)
        const resData = this.addFilterData(visibleData, filterpos)
    return(
        <div className="app">
            <AppInfo scoreEmployees={datasalar.length} scoreIncrease={(datasalar.filter(item=> item.increase).length)}/>

            <div className="search-panel">
                <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                <AppFilter onUpdateFilterTarget={this.onUpdateFilterTarget}/>
            </div>

        <EmployersList 
            data={resData}
            onDelete={this.deldata}
            onToggleProp = {this.onToggleProp}
            />

        <EmployeesAddForm addData={this.adddata}/>
        </div>
    );
    }
}





export default App;