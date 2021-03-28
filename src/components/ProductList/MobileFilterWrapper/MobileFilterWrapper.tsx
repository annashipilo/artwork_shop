import React from 'react';
import Filter from '../Filter/Filter.connect';
import './style.scss';

interface MobileFilterWrapperProps {
    clearFilter(): void;
    showFilter(state: boolean): void;
}

const MobileFilterWrapper = ({ clearFilter, showFilter }: MobileFilterWrapperProps) => {
    return <div className="filter-wrapper">
        <button className="filter-wrapper__btn-close cross-btn" onClick={() => showFilter(false)}></button>
        <Filter />
        <div className="filter-wrapper__btns">
            <button onClick={clearFilter} className="btn btn--default">Clear</button>
            <button onClick={() => showFilter(false)} className="btn btn--primary">Save</button>
        </div>
    </div>
}

export default MobileFilterWrapper