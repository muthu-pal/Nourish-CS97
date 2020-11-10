
import './App.css';
import Header from './header'
import Footer from './footer'
import React from 'react';

export default class Upload extends React.Component {
    constructor(props){ 
        super(props) 
        this.state = { title:'',caption:'', tags:'', image:''} 
        this.handleChange = this.handleChange.bind(this) 
        this.handleSubmit = this.handleSubmit.bind(this) 
      } 
      
        
      handleSubmit(event){ 
        const { title, caption, tags, image } = this.state 
        event.preventDefault() 
        alert(` 
          ____Your Details____\n 
          title : ${title} 
          caption : ${caption} 
          tags : ${tags} 
          image : ${image} 
        `) 
      } 
      
       
      handleChange(event){ 
        this.setState({ 
           
          [event.target.name] : event.target.value 
        }) 
      } 
      
      
      render(){ 
        return( 
            <div>
                <Header />
          <form onSubmit={this.handleSubmit}> 
            <div> 
              <label htmlFor='title'>title</label> 
              <input  
                name='title'
                placeholder='title' 
                value = {this.state.title} 
                onChange={this.handleChange} 
              /> 
            </div> 
            <div> 
              <label htmlFor='caption'>caption</label> 
              <input 
                name='caption' 
                placeholder='caption'
                value={this.state.caption} 
                onChange={this.handleChange} 
              /> 
            </div> 
            <div> 
              <label htmlFor='tags'>tags</label> 
              <input 
                name='tags' 
                placeholder='tags'
                value={this.state.tags} 
                onChange={this.handleChange} 
              /> 
            </div> 
            <div> 
              <label htmlFor='image'>image</label> 
              <input 
                name='image' 
                placeholder='image'
                value={this.state.image} 
                onChange={this.handleChange} 
              /> 
            </div> 
            <div> 
              <button>Submit</button> 
            </div> 
          </form>
          <Footer />
          </div>
        ) 
      } 
  }

  //title, caption, tags, picture

  
