import React from 'react';
import Filter from '../Filter/Filter.connect';
import './style.scss';

interface MobileFilterWrapperProps {
    clearFilter(): void;
    applyFilter(state: any): void;
    isFilterShown: boolean;
}

const MobileFilterWrapper = ({ clearFilter, applyFilter, isFilterShown }: MobileFilterWrapperProps) => {
    return <div className="filter-wrapper">
        {isFilterShown && <Filter />}
    </div>
}

export default MobileFilterWrapper