import React from 'react'

const spinner = () => {
    return (
        <div className="flex justify-center items-center py-14">
            <div className='spinner_container gap-2'><span className="loader"></span> <span className='loading_text'>loading...</span></div>
        </div>
    )
}

export default spinner