import React, { useState, ChangeEvent } from 'react';
import { Sorting } from '../../../interfaces';
import './style.scss';

interface SortProps {
    sort: Sorting
    changeSort(sort: Sorting): void;
}

const Sort = ({ sort, changeSort }: SortProps) => {
    const [option, setOption] = useState('Price');

    const changeSortOrder = () => {
        const newSort = { ...sort, isAscending: !sort.isAscending };
        changeSort(newSort);
    }

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setOption(e.target.value);
        const newSort = { ...sort, value: e.target.value.toLowerCase() };
        changeSort(newSort);
    }

    return (
        <div className="sort">
            <button onClick={changeSortOrder} className="sort__btn"></button>
            <span className="title--not-active">Sort By</span>
            <select className="sort__select" defaultValue={option} onChange={handleSelectChange}>
                <option>Price</option>
                <option>Alphabet</option>
            </select>
        </div>
    )
}

export default Sort;