import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'; 

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: "Joahn C", salary:83200, increase: false, rise: true, id: 1},
        {name: "Tpv C", salary:30, increase: false, rise: false, id: 2},
        {name: "Aleax E", salary:82030, increase: true, rise: false, id: 3}
      ],
      term: '',
      earn: ''
    }
    this.maxId = 4;
  }
  deleteItem = (id) => {
    this.setState(({data}) => {
      // const index = data.findIndex(elem => elem.id === id);
      // data.splice(index, 1);
      // const before = data.slice(0, index);
      // const after = data.slice(index+1);
      // const newArr = [...before, ...after] 
      return {
        data: data.filter(elem => elem.id !== id)
      }
    })
  }
  addPers = (name, salary) => {
    if(name.trim().length < 3 || salary.trim().length < 3) {
      return;
    }
    const newItem = {
      salary,
      name,
      increase: false,
      rise: false,
      id: uuidv4()
    }
    this.setState(({data}) => {
    const arr = [...data, newItem];
      return {
        data: arr
      }
    })
  }
  onToggleIncrease = (id) => {
    // this.setState(({data}) => {
    //   const index = data.findIndex(elem => elem.id === id);

    //   const old = data[index];
    //   const newItem = {...old, increase: !old.increase};
    //   const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

    //   return {
    //     data: newArray
    //   }
    // })
    
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, increase: !item.increase}
        }
        return item;
      })
    })) 
  }
  onToggleProps = (id, propse) => { 
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [propse]: !item[propse]} 
        }
        return item;
      })
    }))
  }
  onToggleRise = (id) => {
    // this.setState(({data}) => {
    //   const index = data.findIndex(elem => elem.id === id);
    //   const oldArr = data[index];
    //   const newItem = {...oldArr, rise: !oldArr.rise};
    //   const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    //   return {
    //     data: newArr
    //   }
    // })
    this.setState(({data}) => ({
      data: data.map(elem => {
        if (elem.id === id) {
          return {...elem, rise: !elem.rise};
        }
        return elem;
      })
    }))
  }
  searchName = (data, term, earn) => {
     return data.filter(item => {
        if (earn === 'rise') {
          return item.rise && item.name.indexOf(term) > -1;
        } else {
          return item.salary > +earn && item.name.indexOf(term) > -1;
        }
    })
  }
  onUpdateSearch = (term) => {
    this.setState({term});
  }
  onCategorySearch = (earn) => {
    this.setState({earn});
  }
  render() {
    const {data, term, earn} = this.state;
    const quantity = this.state.data.length;
    const increased = this.state.data.filter(elem => elem.increase).length;
    const visibleData = this.searchName(data, term, earn);
    return (
      <div className="app">
          <AppInfo quantity={quantity} increased={increased}/>
          <div className="search-panel">
              <SearchPanel SearchName={this.onUpdateSearch}/>
              <AppFilter SearchCategory={this.onCategorySearch}/>
          </div>
          <EmployeesList 
            data = {visibleData}
            onDelete={this.deleteItem}
            onToggleProps={this.onToggleProps}
          />
          <EmployeesAddForm  onAdd={this.addPers}/>
      </div>
    );
  }
}

export default App;







