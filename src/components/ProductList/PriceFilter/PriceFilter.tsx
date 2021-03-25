import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

interface PriceFilterProps {
    applyFilter(filter: any): void;
}

const priceOptions = [{
    name: "Lower than $50",
    value: {
        min: 0,
        max: 50
    },
}, {
    name: "$50 - $100",
    value: {
        min: 51,
        max: 100
    },
}, {
    name: "$100 - $150",
    value: {
        min: 101,
        max: 150
    },
}, {
    name: "More than $150",
    value: {
        min: 151,
        max: Infinity
    },
}]

const PriceFilter = ({ applyFilter }: PriceFilterProps) => {
    const handleChange = (e: any) => {
        const value = e.target.value;
        const option = priceOptions.find(price => price.name === value)
        applyFilter({ price: option?.value })
    }

    return (
        <RadioGroup onChange={handleChange}>
            {
                priceOptions.map((item, i) => {
                    return <FormControlLabel
                        value={item.name}
                        control={<Radio color="default" checkedIcon={<CheckBoxIcon />} icon={<CheckBoxOutlineBlankIcon />} />}
                        label={item.name}
                        key={i} />
                })
            }
        </RadioGroup>
    )
}

export default PriceFilter