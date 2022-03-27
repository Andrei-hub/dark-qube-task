import React from 'react';
import {CardContainer} from "../News/News.styled";
import Card from "../Card";
import Pagination from "../Pagination";
import usePagination from "utils/usePagination";
import {useSelector} from "react-redux";
import {selectedNewsSelector} from "appRedux/News/selectors";
import {Empty} from "../Status";

const Bookmarks = () => {
    const bookmarks = useSelector(selectedNewsSelector);
    const {currentData,rangeOf,totalItems,next,prev} = usePagination(bookmarks, 10);
    return (
        bookmarks.length
            ? <CardContainer>
                {currentData().map((el)=> <Card key={el.id} card={el} height={'425px'}/>)}
                <Pagination
                    range={rangeOf}
                    total={totalItems}
                    prevPage={() => prev()}
                    nexPage={() => next()}
                />
                </CardContainer>
            : <Empty type={'You don\'t have bookmarks'}/>
    );
};

export default Bookmarks;