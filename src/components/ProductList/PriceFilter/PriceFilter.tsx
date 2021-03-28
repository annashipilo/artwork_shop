import React, { ChangeEvent } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { priceOptions } from './priceOptions';
import { PriceOptionValue as PriceOptionValueInterface } from '../../../interfaces';

interface PriceFilterProps {
    applyFilter(filter: { price: PriceOptionValueInterface }): void;
    priceFilter: PriceOptionValueInterface;
}

const PriceFilter = ({ applyFilter, priceFilter }: PriceFilterProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const option = priceOptions.find(price => price.name === value)
        if (option) {
            applyFilter({ price: option.value })
        }
    }

    const findOption = (value: PriceOptionValueInterface, name: string): boolean => {
        const option = priceOptions.find(option => {
            return option.name === name
        })
        if (option && option.value == value) {
            return true;
        }
        return false;
    }

    return (
        <RadioGroup onChange={handleChange}>
            {
                priceOptions.map((item, i) => {
                    return <FormControlLabel
                        value={item.name}
                        control={<Radio color="default" checked={findOption(priceFilter, item.name)} checkedIcon={<CheckBoxIcon />} icon={<CheckBoxOutlineBlankIcon />} />}
                        label={item.name}
                        key={i} />
                })
            }
        </RadioGroup>
    )
}

export default PriceFilter