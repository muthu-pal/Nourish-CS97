import './Upload.css';
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
        this.setState({title:'',caption:'', tags:'', image:''})
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
                <div className="upload-container">
          <form className="upload-form" onSubmit={this.handleSubmit}> 
            <div className="input-div"> 
              <label htmlFor='title'>Title:  </label> 
              <input className="input"
                name='title'
                placeholder='title' 
                value = {this.state.title} 
                onChange={this.handleChange} 
              /> 
            </div> 
            <div className="input-div"> 
              <label htmlFor='caption'>Caption:  </label> 
              <textarea className="input" id="caption-input"
                name='caption' 
                placeholder='caption'
                value={this.state.caption} 
                onChange={this.handleChange} 
              /> 
            </div> 
            <div className="input-div"> 
              <label htmlFor='tags'>Tags:  </label> 
              <input className="input"
                name='tags' 
                placeholder='tags'
                value={this.state.tags} 
                onChange={this.handleChange} 
              /> 
            </div> 
            <div className="input-div"> 
              <label htmlFor='image'>Image:  </label> 
              <input className="input"
                name='image' 
                placeholder='image'
                value={this.state.image} 
                onChange={this.handleChange} 
              /> 
            </div> 
            <div className="submit-div"> 
              <button className="upload-button">Submit</button> 
            </div> 
          </form>
          </div>
          <Footer />
          </div>
        ) 
      } 
  }

  //title, caption, tags, picture

  
