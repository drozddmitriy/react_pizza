import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import { setPizzas } from './redux/actions/pizzas'

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;

// import { connect } from 'react-redux';

// class App extends React.Component {
//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json').then(({data}) => {
//       this.props.setPizzas(data.pizzas);
//     });
//   }
//
//   render() {
//     return (
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Route path="/" render={() => <Home items={this.props.items} />} exact />
//           <Route path="/cart" component={Cart} exact />
//         </div>
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters,
//   }
// };
//
// const mapDispatchToProps = (disptch) => {
//   return {
//     setPizzas: (items) => disptch(setPizzasAction(items))
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
