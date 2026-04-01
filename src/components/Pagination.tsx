import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { PaginatedResponse, Product } from "../types/product";

type props = {
    paginationData: PaginatedResponse<Product> | null;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({ currentPage, setCurrentPage, paginationData }: props) => {
    // Generate page numbers to display
    const getPageNumbers = () => {
        if (!paginationData) return [];
        
        const totalPages = paginationData.totalPages;
        const range = 2;
        const pages: (number | string)[] = [];
        
        pages.push(1);
        
        if (currentPage - range > 2) {
            pages.push("...");
        }
        
        // Step 3: Add pages around current page
        for (let i = Math.max(2, currentPage - range); i <= Math.min(totalPages - 1, currentPage + range); i++) {
            pages.push(i);
        }
        
        if (currentPage + range < totalPages - 1) {
            pages.push("...");
        }
        
        if (totalPages > 1) {
            pages.push(totalPages);
        }
        
        return pages;
    };

    const pages = getPageNumbers();
    const totalPages = paginationData?.totalPages || 1;
    const canGoPrev = currentPage > 1;
    const canGoNext = currentPage < totalPages;

    return (
        <div className="w-full flex items-center justify-between mt-8 border-t border-gray-200 px-4 py-3">
            <div className="flex flex-1 justify-between sm:hidden">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    disabled={!canGoPrev}
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                >
                    Previous
                </button>
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                    disabled={!canGoNext}
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing{" "}
                        <span className="font-medium">
                            {paginationData ? paginationData.limit * (paginationData.page - 1) + 1 : 0}
                        </span>{" "}
                        to{" "}
                        <span className="font-medium">
                            {paginationData ? Math.min(paginationData.limit * paginationData.page, paginationData.total) : 0}
                        </span>{" "}
                        of{" "}
                        <span className="font-medium">
                            {paginationData?.total}
                        </span>{" "}
                        results
                    </p>
                </div>
                <div>
                    <nav
                        aria-label="Pagination"
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                    >
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                            disabled={!canGoPrev}
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeft />
                        </button>
                        
                        {pages.map((page, idx) => (
                            <React.Fragment key={idx}>
                                {page === "..." ? (
                                    <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300">
                                        ...
                                    </span>
                                ) : (
                                    <button
                                        onClick={() => setCurrentPage(page as number)}
                                        aria-current={page === currentPage ? "page" : undefined}
                                        className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0 ${
                                            page === currentPage
                                                ? "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                        }`}
                                    >
                                        {page}
                                    </button>
                                )}
                            </React.Fragment>
                        ))}
                        
                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                            disabled={!canGoNext}
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRight />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
