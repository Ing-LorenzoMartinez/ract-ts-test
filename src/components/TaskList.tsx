import * as React from 'react'
import {ITask} from './Task';

class TaskList extends React.Component<iTaskListProps,any>{
    

    render() : JSX.Element[]{
        return this.props.tasks.map((task:ITask,i:number) =>{
            return (
                <div className="col-md-4 mt-2" key={task.id}>
                    <div className="card card-body">                    
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <button onClick={() =>this.props.DeleteTask(task.id)} className="btn btn-danger btn-block">Delete</button>                    
                    </div>
                </div>
            )
        });
    }
}

interface iTaskListProps{
    tasks:ITask[];
    DeleteTask: (id:number) => void;
}

export default TaskList;