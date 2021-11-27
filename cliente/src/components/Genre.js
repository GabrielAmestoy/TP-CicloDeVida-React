import React from 'react';

const Genre = ({name}) => {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
                <div className="card-body">
                    {name}
				</div>
            </div>
        </div>
    );
}

export default Genre;