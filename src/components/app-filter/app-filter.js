import { Component } from 'react';
import './app-filter.css'

class AppFilter extends Component{

    constructor(props){
        super(props);
        this.state={
            filterpos: 'all'
        }
    }

    onUpdateFilterTarget = (e) =>{
        const filterpos = e.currentTarget.getAttribute('data-filter');
        this.setState({filterpos});
        this.props.onUpdateFilterTarget(filterpos);

    }

    

    render(){
       
    return(


        <div className="btn-group">
            <button 
                className='btn btn-outline-light'
                type="button" data-filter="all" onClick={this.onUpdateFilterTarget}>
                    Все сотрудники
            </button>
            <button 
                className='btn btn-outline-light'
                type="button" data-filter="toUpper" onClick={this.onUpdateFilterTarget}>
                    На повышение
            </button>
            <button 
                className='btn btn-outline-light'
                type="button" data-filter="bigsallar" onClick={this.onUpdateFilterTarget}>
                    З/П больше 1000$
            </button>
        </div>
    );
    }
}

export default AppFilter;