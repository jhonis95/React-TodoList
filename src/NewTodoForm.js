import React,{Component} from "react"

class NewTodoForm extends Component{
    constructor(){
        super(this.props)
        this.state={
            task:""
        };
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]:evt.target.value
        })
    }
    handleSubmit(evt){
        evt.preventDefalt();//for what?
        this.props.createTodo(this.state)
        this.setState({ //cleaning the state for next submit
            task:""
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='task'>New Todo</label>
                <input 
                    type='text' 
                    name="task"
                    placeholder="New Todo" 
                    id="task"
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <button>Add Todo</button>
            </form>
        )
    }
}
export default NewTodoForm