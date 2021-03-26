import React from 'react';
import './style.scss';

interface ToggleFilterProps{
    showFilter(state: boolean): void;
}

const ToggleFilter = ({showFilter}: ToggleFilterProps) => {
    return <button className="filter--mobile" onClick={() => showFilter(true)}></button>
}

export default ToggleFilter;