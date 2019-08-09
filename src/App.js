import React from 'react';
import Pagination from './Component/Pagination';
import './App.css';

class App extends React.Component {
  constructor() {
      super();
      this.state = {
          
          pageOfItems: [],
          posts:[]
          
      };
      
      
      this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {

      this.setState({ pageOfItems: pageOfItems });
  }
  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/posts').then (result => result.json()).then(posts => this.setState({posts}))
  }

  render() {
      return (
          <div className="App">
              <div className="container">
                  <div className="text-center">
                      <h1>Post</h1>
                    {this.state.pageOfItems.map(post => 
                    <div className="card-group">
                    <div className="card"> 
                    <div className="card-body"> 
                    <div key={post.id}>
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.body}</p>
                    </div>
                    </div>
                   
                      </div>
                    </div>
                    )}
                    <br />
                      <Pagination className="page" items={this.state.posts} onChangePage={this.onChangePage} />
                  </div>
              </div>
              <hr />
              
          </div>
      );
  }
}
export default App;