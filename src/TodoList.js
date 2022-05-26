import React,{Component} from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
import './TodoList.css'

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state={
            todos:[]
        }
        this.create=this.create.bind(this)
        this.remove=this.remove.bind(this)
        this.update=this.update.bind(this)
        this.togglelCompletion=this.togglelCompletion.bind(this)
    }
    create(newTodo){//adding a new todo to the list
        this.setState({
            todos: [...this.state.todos, newTodo]
          });
    }
    remove(id){
        console.log(this.state.todos)
        this.setState({
            todos:this.state.todos.filter(t=>t.id!==id)//creating a new array without the delete task
        })
    }
    update(id, updatedTask){
        const updatedTodos=this.state.todos.map(todo=>{
            if(todo.id===id){
                return{...todo,task:updatedTask}
            }
            return todo;
        });
        this.setState({
            todos:updatedTodos
        })
    }
    togglelCompletion(id){
        const updatedTodos=this.state.todos.map(todo=>{
            if(todo.id===id){
                return{...todo,completed:!todo.completed}
            }
            return todo;
        });
        this.setState({
            todos:updatedTodos
        })
    }
    render(){
        const todos=this.state.todos.map(todo=>{//savind all the todos in one variable to display in render function
            return (
                <Todo 
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    completed={todo.completed}
                    removeToDo={this.remove}
                    updateTodo={this.update}
                    togglelTodo={this.togglelCompletion}
                />
            )
        })
        return(
            <div className='TodoList'>
                <h1>
                    Todo List<span>A Simple React Todo List App.</span>
                </h1>
                <ul>
                    {todos}
                </ul>
                <NewTodoForm createTodo={this.create}/>
            </div>
        )
    }
}
export default TodoList;