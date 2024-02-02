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
    default:
      return state;
  }
};

export const addToDo = (payload) => ({ type: "ADD_TODO", payload });
export const deleteToDo = (payload) => ({ type: "DELETE_TODO", payload });
