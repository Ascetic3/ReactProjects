import { Component } from "react";

const date1 = new Date(2021, 7, 19, 14, 5);
const date2 = new Date(2021, 7, 19, 15, 23);

const initialData = [
  {
    title: 'Изучить React', 
    desc: 'Да поскорее!',
    image: '',
    done: true,
    createAt: date1.toLocaleStirng(),
    key: date1.getTime()
  },
  {
    title: 'Написать первое React-приложение', 
    desc: 'Список запланнированных дел',
    image: '',
    done: false,
    createAt: date2.toLocaleStirng(),
    key: date2.getTime()
  },
];

export default class App extends Component{
  constructor(props) {
    super(props);
    this.data = initialData;
  }

  render() {
    return(
      <div>
        <nav className="navbar is-light">
          <div className="navbar-brand">
            <span className="navbar-item is-uppercase">
              Todos
            </span>
          </div>
        </nav>
        <main className="content px-6 mt-6">
          <h1>Todos</h1>
        </main>
      </div>
    );
  }
}