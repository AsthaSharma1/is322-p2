// import dependencies
import React from 'react';
import TaskItem from './TaskItem';

class TaskList extends React.Component {
	
	// update task list - mark task as done
	markDone = (task) => {
		const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
		let taskList = this.props.tasks;
		taskList.splice(taskIndex, 1);
		console.log(this.props);
		this.props.onUpdateTaskList(taskList);
	}
	markInProgress = (task) => {
        const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
        let taskList = this.props.tasks;
        task.splice(taskIndex, 2);
        console.log(this.props);
        this.props.onUpdateTaskList(taskList);
    }

    markToDo = (task) => {
        const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
        let taskList = this.props.tasks;
        task.splice(taskIndex, 3);
        console.log(this.props);
        this.props.onUpdateTaskList(taskList);
    }

	// map items in array and render content in index.js -> index.html
	render() {
		const taskItems = this.props.tasks.map(task => {
			return <TaskItem task={task} key={task.id} markDone={this.markDone} />
		});

		return (
			<ul className="task-list list-group">
			{ taskItems }
			</ul>
		)
	}
}

// export component
export default TaskList;
