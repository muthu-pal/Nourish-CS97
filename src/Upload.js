import "./Upload.css";
import Header from "./header";
import Footer from "./footer";
import React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { useForm } from "./util/hooks";

function Upload(props) {
  const { values, onChange, onSubmitForm } = useForm(createPostCallback, {
    title: "",
    caption: "",
    tagsString: "",
    tags: [],
    imageName: "",
  });

  const [createPost, { error }] = useMutation(CREATE_POST_MUTATION, {
    variables: values,
    update(_, result) {
      values.title = "";
      values.caption = "";
      values.tags = [];
      values.tagsString = "";
      values.imageName = "";
      props.history.push("/");
      window.location.reload();
      // window.alert("You've uploaded a post! Head to the home page to see.");
      // window.location.reload();
    },
  });

  function createPostCallback() {
    handleFileSubmit();
    createPost();

    //props.history.push("/");
  }

  ///upload stuff//
  const [uploadFile] = useMutation(UPLOAD_FILE, {
    onCompleted: (data) => console.log(data),
  });
  const handleFileSubmit = () => {
    const file = document.getElementById("fileInput").files[0];
    if (!file) return;
    uploadFile({ variables: { file } });
  };
  ///end of upload stuff////
  return (
    <div>
      <Header />
      <div className="upload-container">
        <form className="upload-form" onSubmit={onSubmitForm}>
          <div className="input-div">
            <label htmlFor="title">Title: </label>
            <input
              className="input"
              name="title"
              placeholder="title"
              value={values.title}
              onChange={onChange}
            />
          </div>
          <div className="input-div">
            <label htmlFor="caption">Caption: </label>
            <textarea
              className="input"
              id="caption-input"
              name="caption"
              placeholder="caption"
              value={values.caption}
              onChange={onChange}
            />
          </div>
          <div className="input-div">
            <label htmlFor="tags">Tags: </label>
            <input
              className="input"
              name="tagsString"
              placeholder="tags"
              value={values.tagsString}
              onChange={onChange}
            />
          </div>
          <div className="input-div">
            <label htmlFor="image">Upload an image: </label>
            <br />
            <input
              type="file"
              id="fileInput"
              name="imageName"
              value={values.imageName}
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
  );
}
//, $caption: String!, $tags: String!, $image: String!

const CREATE_POST_MUTATION = gql`
  mutation createPost(
    $title: String!
    $caption: String!
    $tags: [String]!
    $imageName: String!
  ) {
    createPost(
      title: $title
      caption: $caption
      tags: $tags
      imageName: $imageName
    ) {
      id
      title
      caption
      tags
      createdAt
      imageName
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default Upload;

/*
A potential problem with image uploading. First of all, it doesn't check file type yet. Also,
say you upload filename.jpg. It'll always go to the image folder. However, localhost:5000/filename.jpg
will lead to the GraphQL play ground, not the image. The tutorial here
https://www.youtube.com/watch?v=BcZ_ItGplfE uses Apollo server express to fix this. 
This led to compilation errors for me. I don't think it matters though, we can just
access the image via. /images/filename.jpg. Also, we'll probably put these images
to an external source anyways. 
Also, a potential probelm is that the filenames aren't randomized (may be private
  or may lead to duplicates). Tutorial goes over how to fix this. */
