import { ADD_POST, EDIT_POST, DELETE_POST } from "./actionTypes";

export const addPost = (title, content, categories) => {
  return {
    type: ADD_POST,
    title,
    content,
    categories,
  };
};

export const editPost = (id, text) => {
  return {
    type: EDIT_POST,
    id,
    text,
  };
};
export const deletePost = (id) => {
  return {
    type: DELETE_POST,
    id,
  };
};
