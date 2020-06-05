import * as React from 'react';
import {ITask} from './Task'

class TaskForm extends React.Component<ITaskFormProps,any> {

    constructor(props:ITaskFormProps){
        super(props);
        this.state = {
            title:'',
            description:''
        }
    }

    getcurrenttimestamp() :number{
        return new Date().getTime();
    }

    handleNewTask(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();        
        const newtask: ITask = {
            id: this.getcurrenttimestamp(), 
            title: this.state.title , 
            description: this.state.description, 
            completed:false
        }
        this.props.AddNewTask(newtask);        
        console.log(newtask)
        this.setState({title:'',description:''})
    }

    handleimputchange(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>){
        const {name,value} = e.target;
        this.setState({
            [name]:value
        })
        //console.log(this.state)
        //console.log(value)
    }

    render(){
        return(
            <div className='card card-body'>
            <form onSubmit={e => this.handleNewTask(e)}>                
                <div className="form-group">
                    <input type='text' className='form-control'    
                    name='title'
                    onChange={e=> this.handleimputchange(e)}
                    value={this.state.title}
                    placeholder='title'></input>
                </div>
                <div className="form-group">
                    <textarea className="form-control" 
                    name='description'
                    onChange={e=> this.handleimputchange(e)}
                    value={this.state.description}
                    placeholder="task description" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Save</button>
            </form>
        </div>
        )        
    }
}

interface ITaskFormProps{
    AddNewTask:(task:ITask) => void;
}

interface ITaskFormState{
    title:string;
    description:string;
}

export default TaskForm;