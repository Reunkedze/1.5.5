import React, { Component } from "react";
import { formatDistanceToNow } from "date-fns";
import "./Task.css";

export default class Task extends Component {
  render() {
    const { label, onDeleted, onToggleDone, done, time } = this.props;
    let classNames = "task-item";
    if (done) {
      classNames += " done";
    }

    return (
      <span className={classNames}>
        <input className="toggle" type="checkbox" onChange={onToggleDone} />
        <label>
          <span className="description">{label}</span>
          <span className="created">
            created {formatDistanceToNow(time, { addSuffix: true })}
          </span>
        </label>

        <button type="button" className="icon icon-edit"></button>
        <button
          type="button"
          className="icon icon-destroy"
          onClick={onDeleted}
        ></button>
      </span>
    );
  }
}
