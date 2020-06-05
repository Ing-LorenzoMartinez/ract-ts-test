import * as React from 'react';
import TaskForm from './TaskForm'
import {ITask} from './Task'
import TaskList from './TaskList'

export class App extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state ={
            tasks:[]
        }
    }

    AddNewTask(task:ITask){
        this.setState({
            tasks:[...this.state.tasks,task]
        }, () => console.log(this.state))
        //console.log(this.state);
    }

    DeleteTask(id:number){
        console.log(id)
        const tasks_filtered:ITask[] = this.state.tasks.filter(
            (task:ITask) => task.id !== id
          );
        this.setState({tasks:tasks_filtered})
    }

    render() {
        return (
        <div>
            <nav className="navbar navbar-ligh bg-light">
                <a className="navbar-brand"  href="/" >{this.props.title}</a>
            </nav>
            <div className='container p-4'>
                <div className='row'>
                    <div className='col-md-4'>
                        <TaskForm AddNewTask={this.AddNewTask.bind(this)} />
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <TaskList 
                        tasks={this.state.tasks}
                        DeleteTask={this.DeleteTask.bind(this)}
                        />
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

interface IProps{
    title:string;
}

interface IState{
    tasks:ITask[];
}