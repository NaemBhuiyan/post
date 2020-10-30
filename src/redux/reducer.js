import { v4 as uuid } from "uuid";
import { ADD_POST, EDIT_POST, DELETE_POST } from "./actionTypes";

const initialState = {
    posts: [
      {
        id: uuid(),
        title: "Good morning",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        categories: ["Simple"],
      },
      {
        id: uuid(),
        title: "Good after Noon",
        content:
          "Deserunt quasi voluptates perspiciatis ad, aspernatur odio nisi natus. ",
        categories: ["Featured", "hek"],
      },
      {
        id: uuid(),
        title: "Good night",
        content:
          "Reprehenderit esse facere fuga. Quos officia sapiente voluptatibus unde facilis distinctio amet non!",
        categories: ["Fashion"],
      },
    ],
  },
  reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_POST:
        console.log(action);
        return {
          posts: [
            ...state.posts,
            {
              id: uuid(),
              title: action.title,
              content: action.content,
              categories: action.categories,
            },
          ],
        };

      case DELETE_POST:
        return {
          posts: [...state.posts.filter((todo) => todo.id !== action.id)],
        };
      case EDIT_POST:
        console.log(action.id, action.text);
        return {
          posts: [
            ...state.posts.map((todo) => {
              if (todo.id === action.id) {
                todo.text = action.text;
              }
              return todo;
            }),
          ],
        };

      default:
        return state;
    }
  };

export default reducer;
