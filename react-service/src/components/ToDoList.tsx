import * as React from 'react';

import { emit } from 'src/utils';
import { Item } from '../models';
import { ToDoItem } from './ToDoItem';

interface IState {
    items: Item[],
}


export class ToDoList extends React.Component<{}, IState> {
    public state = {
        items: [{
            finished: true,
            text: 'Add home page on react',
        }, {
            finished: true,
            text: 'Add feedback form on angular',
        }, {
            finished: true,
            text: 'Add todo list as other microfrontend app on react + typescript',
        }, {
            text: 'Show a demo',
        }],
    }

    public getToDoListItems() {
        return this.state.items.map((item, index) => <ToDoItem { ...item } key={ index } onClick={ this.toggleItem(item) }/>);
    }

    public toggleItem = (toggledItem: Item) => () => this.setState((state: IState) => ({
        items: state.items.map(item => item === toggledItem ? { ...item, finished: !item.finished } : item),
    }), () => emit('actions', { type: 'toggle-todo', item: { ...toggledItem, finished: !toggledItem.finished } }));

    public addItem = () => {
        const text = prompt('Enter todo item text...');
        if (text) {
            const item = { text };
            this.setState((state: IState) => ({ items: [...state.items, item] }));
            emit('actions', { type: 'add-todo', item });
        }
        
    }

    public render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="card" style={ { width: '30rem' } }>
                    <div className="card-body">
                        <h5 className="card-title">React ToDoList Service</h5>
                        <div className="list-group">
                            { this.getToDoListItems() }
                        </div>
                        <hr/>
                        <div className="text-right">
                            <button className="btn btn-primary" onClick={ this.addItem }>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}