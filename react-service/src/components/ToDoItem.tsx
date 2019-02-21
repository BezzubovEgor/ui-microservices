import * as React from 'react';

import { Item } from '../models';

interface IProps extends Item {
    onClick: () => void;
}

export const ToDoItem = ({ text, finished, onClick }: IProps) => (
    <button className={ `list-group-item list-group-item-action ${finished ? 'list-group-item-light' : ''}`} onClick={ onClick }>
        { finished ? <del>{ text }</del> : text }
    </button>
)