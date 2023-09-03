import React, { Component } from 'react'
import './TasksFilter.css'

export default class TasksFilter extends Component {
  render() {
    const { onFilter, show } = this.props
    return (
      <fieldset className="filters">
        <input
          className="filter-input"
          type="radio"
          name="b"
          id="allButton"
          onChange={() => {
            onFilter('all')
          }}
          checked={show === 'all'}
        />
        <label className="selected" htmlFor="allButton">
          All
        </label>

        <input
          className="filter-input"
          type="radio"
          name="b"
          id="activeButton"
          onChange={() => {
            onFilter('active')
          }}
          checked={show === 'active'}
        />
        <label htmlFor="activeButton">Active</label>

        <input
          className="filter-input"
          type="radio"
          name="b"
          id="completedButton"
          onChange={() => {
            onFilter('completed')
          }}
          checked={show === 'completed'}
        />
        <label htmlFor="completedButton">Completed</label>
      </fieldset>
    )
  }
}
