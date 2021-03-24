import React, { useState } from 'react';
import { Sorting } from '../../../interfaces';
import './style.scss';

interface SortProps {
    sort: Sorting
    changeSort(sort: any): void;
}

const Sort = ({ sort, changeSort }: SortProps) => {
    const [option, setOption] = useState('Price');

    const changeSortOrder = () => {
        const newSort = { ...sort, isAscending: !sort.isAscending };
        changeSort(newSort);
    }

    const handleSelectChange = (e: any) => {
        setOption(e.target.value);
        const newSort = { ...sort, value: e.target.value };
        changeSort(newSort);
    }

    return (
        <div className="sort">
            <span onClick={changeSortOrder}><img src="/assets/sort-icon.jpg" alt="sort-icon" /></span>
            <span className="title--not-active">Sort By</span>
            <select className="sort__select" defaultValue={option} onChange={handleSelectChange}>
                <option>Price</option>
                <option>Alphabet</option>
            </select>
        </div>
    )
}

export default Sort;