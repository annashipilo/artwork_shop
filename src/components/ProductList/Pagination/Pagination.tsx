import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import './style.scss';

interface ProductPaginationProps{
    onChange(page: number): void;
    pageIndex: number;
    count: number;
}

const ProductPagination = ({ onChange, pageIndex, count }: ProductPaginationProps) => {
    return (
        <div className="pagination">
            <Pagination count={count} color="standard" page={pageIndex} onChange={(event: object, page: number) => {onChange(page)}} />
        </div>
    );
}

export default ProductPagination;