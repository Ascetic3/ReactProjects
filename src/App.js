import { Component } from "react";
import {HashRouter, Routes, Route, NavLink} from 'react-router-dom';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

const date1 = new Date(2021, 7, 19, 14, 5);
const date2 = new Date(2021, 7, 19, 15, 23);

// const [date1String, date2String] = [date1.toLocaleString, date2.toLocaleString]

// const date1: object = new Date(2021, 7, 19, 14, 5);
// const date2: object = new Date(2021, 7, 19, 15, 23);

const initialData = [
  {
    title: 'Изучить React', 
    desc: 'Да поскорее!',
    image: '',
    done: true,
    // createAt: date1.toLocaleStirng(),
    // createAt: date1String,
    createAt: date1.toLocaleString,
    key: date1.getTime(),
  },
  {
    title: 'Написать первое React-приложение', 
    desc: 'Список запланнированных дел',
    image: '',
    done: false,
    // createAt: date2String,
    createAt: date2.toLocaleString,
    key: date2.getTime(),
  },
];

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {data: initialData, showMenu: false};
    this.setDone = this.setDone.bind(this);
    this.delete = this.delete.bind(this);
    this.add = this.add.bind(this);
    this.showMenu = this.showMenu.bind(this);
  }

  setDone(key) {
    const deed = this.state.data.find((current) => current.key === key);
    if (deed)
      deed.done = true;
    this.setState((state) => ({}));
  }

  delete(key) {
    const newData = this.state.data.filter(
      (current) => current.key !== key
    );
    this.setState((state) => ({data: newData}));
  }

  add(deed) {
    this.state.data.push(deed);
    this.setState((state) => ({}));
  }

  showMenu(evt) {
    evt.preventDefault();
    this.setState((state) => ({showMenu: !state.showMenu }));
  }



  render() {
    return(
      <HashRouter>
        <nav className="navbar is-light">
          <div className="navbar-brand">
            <NavLink
              to='/'
              className={({isActive}) =>
                'navbar-item is-uppercase' +
                  (isActive ? ' is-active' : '')
              }
            >
              Todos
            </NavLink>
            <a href="/"
              className={this.state.showMenu ?
                          'navbar-burger is-active' :
                          'navbar-burger'}
              onClick={this.showMenu}>
                <span></span>
                <span></span>
                <span></span>
              </a>
          </div>
          <div  className={this.state.showMenu ?
                          'navbar-menu is-active' :
                          'navbar-menu'}
                onClick={this.showMenu}>
            <div className="navbar-start">
            <NavLink
              to='/add'
              className={({isActive}) =>
                'navbar-item' + (isActive ? ' is-active' : '')
              }
            >
              Создать дело
            </NavLink>
            </div>
          </div>
        </nav>
        <main className="content px-6 mt-6">
          <Routes>
            <Route path='/' element={
              <TodoList list={this.state.data}
                        setDone={this.setDone}
                        delete={this.delete} />
            } />
            <Route path='/add' element={
              <TodoAdd add={this.add} />
            } />
          </Routes>
        </main>
      </HashRouter>
    );
  }
}