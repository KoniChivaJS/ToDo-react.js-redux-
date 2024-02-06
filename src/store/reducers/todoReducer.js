const initialValue = {
  list: [],
};

export const todoReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, list: [...state.list, action.payload] };
    case "DELETE_TODO":
      return {
        ...state,
        list: state.list.filter((item) => item.id != action.payload.id),
      };
    case "CHANGE_TODO":
      const newArray = state.list.map((el) => {
        if (el.id == action.payload.id) {
          el.title = action.payload.title;
        }
        return el;
      });
      return { ...state, list: newArray };
    default:
      return state;
  }
};

export const addToDo = (payload) => ({ type: "ADD_TODO", payload });
export const deleteToDo = (payload) => ({ type: "DELETE_TODO", payload });
export const changeToDoAction = (payload) => ({ type: "CHANGE_TODO", payload });
