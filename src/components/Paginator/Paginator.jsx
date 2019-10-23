import React, {useState} from "react";
import css from "./Paginator.module.css";

const Paginator = ({pageSize = 3, ...props}) => {
    let portionSize = 5;
    let pagesCount = Math.ceil(props.totalTaskCount/pageSize);
    let pagesPortion = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i); 
    }

    return (
        <ul className={`pagination justify-content-center`}>
            {portionNumber > 1 && <li className="page-item" onClick = {() => {setPortionNumber(portionNumber - 1)}}>
                                          <span className="page-link">Previous</span>
                                  </li>}
            {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p, index) => {
                    return <li
                            key={index}
                            className={`page-item + ${props.currentPage === p && "active"}`}
                            onClick={(e) => {props.onPageChanged(p)}}
                            >
                            <a className="page-link">{p}</a>
                      </li>
           })}
           {portionNumber < pagesPortion && <li className="page-item" onClick={() => {setPortionNumber(portionNumber + 1)}}>
                                                <span className="page-link">Next</span>
                                            </li>}
        </ul>
    )
}

export default Paginator;