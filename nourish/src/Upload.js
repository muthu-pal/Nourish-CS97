import './Upload.css';
import Header from './header';
import Footer from './footer';
import React, {useState} from 'react';
import gql from 'graphql-tag';
import {useMutation} from '@apollo/react-hooks';
import { useForm } from './util/hooks'; 

// export default class Upload extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { title: '', caption: '', tags: '', image: '' }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }


//   handleSubmit(event) {
//     const { title, caption, tags, image } = this.state
//     event.preventDefault()
//     alert(` 
//           ____Your Details____\n 
//           title : ${title} 
//           caption : ${caption} 
//           tags : ${tags} 
//           image : ${image} 
//         `)
//     this.setState({ title: '', caption: '', tags: '', image: '' })
//   }


//   handleChange(event) {
//     this.setState({

//       [event.target.name]: event.target.value
//     })
//   }


//   render() {
//     return (
//       <div>
//         <Header />
//         <div className="upload-container">
//           <form className="upload-form" onSubmit={this.handleSubmit}>
//             <div className="input-div">
//               <label htmlFor='title'>Title:  </label>
//               <input className="input"
//                 name='title'
//                 placeholder='title'
//                 value={this.state.title}
//                 onChange={this.handleChange}
//               />
//             </div>
//             <div className="input-div">
//               <label htmlFor='caption'>Caption:  </label>
//               <textarea className="input" id="caption-input"
//                 name='caption'
//                 placeholder='caption'
//                 value={this.state.caption}
//                 onChange={this.handleChange}
//               />
//             </div>
//             <div className="input-div">
//               <label htmlFor='tags'>Tags:  </label>
//               <input className="input"
//                 name='tags'
//                 placeholder='tags'
//                 value={this.state.tags}
//                 onChange={this.handleChange}
//               />
//             </div>
//             <div className="input-div">
//               <label htmlFor='image'>Image:  </label>
//               <input className="input"
//                 name='image'
//                 placeholder='image'
//                 value={this.state.image}
//                 onChange={this.handleChange}
//               />
//             </div>
//             <div className="submit-div">
//               <button className="upload-button">Submit</button>
//             </div>
//           </form>
//         </div>
//         <Footer />
//       </div>
//     )
//   }
// }

function Upload() {


  const {values, onChange, onSubmit} = useForm(createPostCallback, { 
    body: '', 
    title: '',
    caption: '', 
    tags: '', 
  });

  const[createPost, {error}]= useMutation(CREATE_POST_MUTATION, {
    variables: values,
    update(_, result){
      console.log(result)
      values.body = ''
      values.title = ''
      values.caption = ''
      values.tags = ''
    }


  })

  function createPostCallback(){
    createPost()
  }
  return (
    <div>
      <Header />
      <div className="upload-container">
        <form className="upload-form" onSubmit={onSubmit}>
          <div className="input-div">
            <label htmlFor='title'>Title:  </label>
            <input className="input"
              name='title'
              placeholder='title'
              value={values.title}
              onChange={onChange}
            />
          </div>
          <div className="input-div">
            <label htmlFor='caption'>Caption:  </label>
            <textarea className="input" id="caption-input"
              name='caption'
              placeholder='caption'
              value={values.caption}
              onChange={onChange}
            />
          </div>
          <div className="input-div">
            <label htmlFor='tags'>Tags:  </label>
            <input className="input"
              name='tags'
              placeholder='tags'
              value={values.tags}
              onChange={onChange}
            />
          </div>
          <div className="input-div">
            <label htmlFor='image'>Image:  </label>
            <input className="input"
              name='body'
              placeholder='image/body'
              value={values.body}
              onChange={onChange}
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
//, $caption: String!, $tags: String!, $image: String!

const CREATE_POST_MUTATION = gql`
mutation createPost($body: String!, $title: String!, $caption: String!, $tags: String!)
{
  createPost(body: $body, title: $title, caption: $caption, tags: $tags){
    id body title caption tags createdAt
  }
}
`


export default Upload