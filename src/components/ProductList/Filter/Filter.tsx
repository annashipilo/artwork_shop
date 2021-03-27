import React, { useState, useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PriceFilter from '../PriceFilter/PriceFilter';
import './style.scss';

interface FilterProps {
    categories: string[];
    applyFilter(filter: any): void;
    isFilterShown: boolean;
    appliedFilters: any
}

const Filter = ({ categories, applyFilter, isFilterShown, appliedFilters }: FilterProps) => {
    const [options, setOptions] = useState<string[]>([...appliedFilters.category]);

    const handleChange = (e: any) => {
        const option = e.target;
        const updatedOptions = [...options] as string[]
        if (option.checked) {
            updatedOptions.push(option.name)
        } else {
            const index = updatedOptions.indexOf(option.name);
            updatedOptions.splice(index, 1);
        }
        setOptions(updatedOptions);
    }
    useEffect(() => {
        applyFilter({ category: options })
    }, [options])

    return (
        <div className={isFilterShown ? "filters" : "filters--hidden"}>
            <FormControl component="fieldset">
                <h3 className="title">Category</h3>
                <FormGroup>
                    {categories.map((item, i) => {
                        return (
                            <FormControlLabel
                                control={<Checkbox onChange={handleChange} checked={appliedFilters.category.includes(item)} name={item} color="default" value={item} />}
                                label={item}
                                key={i}
                            />
                        )
                    })
                    }
                </FormGroup>
                <h3 className="title">Price range</h3>
                <PriceFilter applyFilter={applyFilter} priceFilter={appliedFilters.price} />
            </FormControl>
        </div>
    )
}

export default Filter;