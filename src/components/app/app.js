import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employers-add-form/employers-add-form';
import './app.css';

const datasalar = [
    {
        name: "John C.",
        salary: 800,
        increase: true,
        id: 1
    },
    {
        name: "Alex M.",
        salary: 4000,
        increase: true,
        id: 2
    },
    {
        name: "Carl W.",
        salary: 5000,
        increase: false,
        id: 3
    },
]


function App(){
    return(
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

        <EmployersList data={datasalar}/>

        <EmployeesAddForm />
        </div>
    );
}





export default App;