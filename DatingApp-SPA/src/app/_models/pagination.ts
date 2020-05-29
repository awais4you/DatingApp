export interface Pagination {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
}

export class PaginatiedResult<T>{
    // property to store users/messages
    result: T;
    pagination: Pagination; // pagination type of Pagination Interface
}