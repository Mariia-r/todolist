import React from "react";

const Paginator = ({pageSize = 3, ...props}) => {
    let pagesCount = Math.ceil(props.totalTaskCount/pageSize);
    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i); 
    }

    return (
        <div>
            {pages.map((p, index) => {
                    return <span 
                            key={index}
                            >
                            {p}
                      </span>
           })}
        </div>
    )
}

export default Paginator;