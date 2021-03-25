import React, { useState, useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PriceFilter from '../PriceFilter/PriceFilter';

interface FilterProps {
    categories: string[];
    applyFilter(filter: any): void;
}

const Filter = ({ categories, applyFilter }: FilterProps) => {
    const [options, setOptions] = useState<string[]>([]);

    const handleChange = (e: any) => {
        const option = e.target;
        const updatedOptions = [...options] as string[]
        if(option.checked){
            updatedOptions.push(option.name)
        } else {
            const index = updatedOptions.indexOf(option.name);
            updatedOptions.splice(index, 1);
        }
        setOptions(updatedOptions);
    }
    useEffect(() => {
        applyFilter({category: options})
    }, [options])

    return (
        <FormControl component="fieldset">
            <h3 className="title">Category</h3>
            <FormGroup>
                {categories.map((item, i) => {
                    return (
                        <FormControlLabel
                            control={<Checkbox onChange={handleChange} name={item} color="default" value={item} />}
                            label={item}
                            key={i}
                        />
                    )
                })
                }
            </FormGroup>
            <h3 className="title">Price range</h3>
            <PriceFilter applyFilter={applyFilter} />
        </FormControl>
    )
}

export default Filter;