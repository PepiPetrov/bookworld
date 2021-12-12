import { useEffect, useState } from "react"

import usePaginate from "../../../../hooks/usePaginate"
import Pagination from "../../utils/Pagination/Pagination"
import BookItem from "../../utils/BookItem"
import { getAll } from '../../../../services/books-service'
import splitArray from "../../../util/splitArray"

export default function AllBooks() {
    const [all, setAll] = useState([])
    const [isFetch, setIsFetch] = useState(true)

    const { data, totalCount, pageSize, currentPage, handlePageChange } = usePaginate(all ? all : [])
    useEffect(() => {
        if (isFetch) {
            getAll().then(x => {
                setAll(x)
            })
        }
        return () => {
            setIsFetch(false)
        }
    })

    const splittedData = splitArray(data, 3)

    return all && all.length > 0
        ? <>
            <h1>All books</h1>
            {splittedData.map(x => {
                return <div style={{ display: "flex", marginRight: "3%" }}>
                    {x.map(book => {
                        return <BookItem book={book} key={book._id} id={book._id}></BookItem>
                    })
                    }
                </div>
            })}
            <Pagination
                itemsCount={totalCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange} />
            page {currentPage} of {Math.ceil(totalCount / pageSize)}
        </>
        : <p>No books</p>
}