import { createStore } from "redux";

const todoState = {
    todos: [],
}

const  todoReducer = (state = todoState, action) => {
    switch(action.type){
        case "add":
            return{
                ...state,
                todos: [
                    ...state.todos,
                    {id: Date.now(), text: action.text,  completed: false},
                ]
            }
         case "todo" : 
            return {
                ...state, 
                todos: state.todos.map((el) => el.id === action.id ? {...el, completed: !el.completed}: el ),
            };
            default:
      return state; 
    }
};

const store = createStore(todoReducer);

export default store;
