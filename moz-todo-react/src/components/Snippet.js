import React from 'react';

export default function Snippet(props) {
    console.log(props.name);
    return ( 
        <div className="c-cb">
        <input id="{props.id}" type="checkbox" defaultChecked={true} />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
    );

}
