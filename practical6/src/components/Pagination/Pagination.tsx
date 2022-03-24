import React from "react";

export function Pagination(
  setPage: {
    (value: React.SetStateAction<number>): void;
  },
  page: number
) {
  return (
    <>
      <div className="justify-content-center d-flex align-item">
        <button
          onClick={() => setPage(page > 1 ? page - 1 : page)}
          className="btn btn-dark mr-3 shadow rounded"
        >
          <i className="fas fa-arrow-left"></i> Previous
        </button>
        <button
          onClick={() => setPage(1)}
          className="btn btn-dark mr-3 shadow rounded"
        >
          1
        </button>
        <button
          onClick={() => setPage(2)}
          className="btn btn-dark mr-3 shadow rounded"
        >
          2
        </button>
        <button
          onClick={() => setPage(page < 2 ? page + 1 : page)}
          className="btn btn-dark shadow rounded"
        >
          Next <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </>
  );
}
