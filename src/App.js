import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';

class App extends Component {
  state = {
    users : [],
    loading : false
  }
  // async componentDidMount(){
    
  //   this.setState({        
  //     loading : true
  //   });
  //   const user = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
  //   this.setState({
  //     users : user.data,
  //     loading : false
  //   }) 
  // }
    searchUsers = async text => {
     
      this.setState({        
        loading : true
      });
      const user = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      
      console.log('user',user.data);

      this.setState({
        users : user.data.items,
        loading : false
      }) 
  }
  render() {
    return (
      <div>
        <nav className="navbar bg-primary">
          <Navbar title="Github Finder" icon="fa fa-github" />
        </nav>
        <Search searchUsers={this.searchUsers} />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>

      </div>
    );
  }

}

export default App;
