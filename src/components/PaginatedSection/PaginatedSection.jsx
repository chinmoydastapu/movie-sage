import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import MoviePreviewCard from '../Cards/MoviePreviewCard';
import MovieDetailsCard from '../Cards/MovieDetailsCard';
import { MdGridOn } from 'react-icons/md';
import { TbListDetails } from 'react-icons/tb';

const PaginatedSection = ({ data }) => {
    const [viewBy, setViewBy] = useState('grid');
    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = viewBy === 'grid' ? 12 : 6;

    // Calculate the indices for the current page
    const offset = currentPage * itemsPerPage;
    const currentPageData = data.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    // Handle page click
    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    return (
        <div>
            <div className='flex justify-between items-baseline gap-3 mb-6'>
                <p className='text-xl capitalize'>total <span className='text-accent'>{data.length}</span> movies found</p>
                <div className="flex-grow bg-gray-700 h-[1px]"></div>
                <div className='flex items-center gap-3'>
                    <span className='tooltip tooltip-accent cursor-pointer border border-gray-700' data-tip="View as Grid">
                        <MdGridOn className={`w-6 h-6 ${viewBy === 'grid' && 'text-accent'}`} onClick={() => setViewBy('grid')} />
                    </span>
                    <span className='tooltip tooltip-accent cursor-pointer border border-gray-700' data-tip="View as List">
                        <TbListDetails className={`w-6 h-6 ${viewBy !== 'grid' && 'text-accent'}`} onClick={() => setViewBy('list')} />
                    </span>
                </div>
            </div>
            <div className={`${viewBy === 'grid' ? 'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5' : 'grid grid-cols-1 gap-8'}`}>
                {
                    viewBy === 'grid' ?
                    currentPageData.map((singleData, idx) => <MoviePreviewCard key={idx} data={singleData} />)
                    : currentPageData.map((singleData, idx) => <MovieDetailsCard key={idx} data={singleData} />)
                }
            </div>

            <ReactPaginate
                previousLabel={"←"}
                nextLabel={"→"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"flex justify-center items-center gap-2 mt-6"}
                pageClassName={"flex items-center justify-center w-fit h-8 mx-3 rounded-lg cursor-pointer hover:text-accent"}
                pageLinkClassName={"w-full h-full flex items-center justify-center"}
                previousClassName={"cursor-pointer hover:text-accent"}
                nextClassName={"cursor-pointer hover:text-accent"}
                breakClassName={"flex items-center justify-center w-8 h-8"}
                activeClassName={"text-accent"}
            />
        </div>
    );
};

export default PaginatedSection;