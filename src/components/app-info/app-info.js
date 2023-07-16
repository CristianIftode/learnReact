import './app-info.css';

const AppInfo = ({scoreEmployees, scoreIncrease}) =>{
    return(
        <div className="app-info">
            <h1>Учёт сотрудников в компании </h1>
            <h2>Общее число сотрудников: {scoreEmployees}</h2>
            <h2>Премию получат: {scoreIncrease}</h2>
        </div>
    );
}

export default AppInfo;