import React ,{Component} from 'react';
import Blogcard from './BlogCard';
import './App.css';
import {empty} from './utils';

class App extends Component {
  state = {
    showBlogs: true,
    blogArr: [
      {
        id:1,
        title:'Blog 1',
        description:'how are you how are you how are you',
        likeCount:0
      },
      {
        id:2,
        title:'Blog 2',
        description:'how are you how are you how are you',
        likeCount:0
      },
      {
        id:3,
        title:'Blog 3',
        description:'how are you how are you how are you',
        likeCount:0
      }
    ]
  }
  onLikeBtnClick = (pos) => {
    const updatedBlogList = this.state.blogArr;
    const updatedBlogObj = updatedBlogList[pos];

    updatedBlogObj.likeCount = updatedBlogObj.likeCount + 1;
    updatedBlogList[pos]=updatedBlogObj;
    this.setState({blogArr: updatedBlogList});

    // console.log(updatedBlogObj);
  }

  onHideBtnClick = () =>{
    // let updatedState = !this.state.showBlogs;
    // this.setState({showBlogs: updatedState});
    this.setState((prevState,prevProps)=>{
      return {showBlogs: !prevState.showBlogs}
    })
    console.log(this.state.showBlogs);
  }

  render(){
    // console.log('render called');
    // console.log(this.state);

    const blogCards=empty(this.state.blogArr)?[]: this.state.blogArr.map((item,pos)=>{
      return( 
        <Blogcard className={'Blog'} key={pos} likeCount={item.likeCount} 
          title={item.title} description={item.description} id={item.id} 
          onLikeBtnClick={() => this.onLikeBtnClick(pos)}/>
      )
    })
    return (
      <div className="App">
        <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide List' : 'Show List'}</button><br></br>
        {
          this.state.showBlogs ? blogCards : null
        }
      </div>  
    );
  }
}

export default App;
