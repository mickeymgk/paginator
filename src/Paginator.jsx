import { useState, useEffect, useMemo } from 'react'
import iconForward from './assets/next.svg'
import iconBack from './assets/before.svg'
import './Paginator.css'

function Paginator({page, total}) {

    const totalPages = useMemo(() => total ?? 1, [total])
    const [currentPage, setCurrentPage] = useState(page ?? 1) 
    
    useEffect(() => {
        document.title = `Page ${currentPage}`;
    });
    
    return (
        <div className='pagination'>
            <ul>
                {currentPage > 1 &&
                <>
                <li className='back btn' onClick={() => setCurrentPage(currentPage-1)}>
                    <img src={iconBack} alt="back"/>
                </li>
                <li className='num' onClick={() => setCurrentPage(1)}>1</li></>}
                {currentPage > 3 && <li className='dots'>...</li>}
                {currentPage > 2 && <li className='num' onClick={() => setCurrentPage(currentPage-1)}>{currentPage-1}</li>}
                <li className='num active'>{currentPage}</li>
                {currentPage < totalPages && <li className='num' onClick={() => setCurrentPage(currentPage+1)}>{currentPage+1}</li>}
                {currentPage < totalPages-2 && <li className='dots'>...</li>}
                {currentPage < totalPages-1 && <li className='num' onClick={() => setCurrentPage(totalPages)}>{totalPages}</li>}
                {currentPage < totalPages &&
                <li className='forward btn' onClick={() => setCurrentPage(currentPage+1)}>
                    <img src={iconForward} alt='forward'/>
                </li>}
            </ul>
        </div>
    )
}

export default Paginator