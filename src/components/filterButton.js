import React from "react"

const FilterButton = (props) => {
    return (
        <div>
            <button
                aria-pressed={props.isPressed}
                className="bg-gray-500 hover:bg-gray-700 text-white hover:text-gray-200 font-bold py-2 px-4 mr-5 m-2 rounded"
                onClick={()=> props.setFilter(props.name)}
            >
            <span className="hidden">Show </span>
            <span>{props.name} </span>
            <span className="hidden">tasks</span>
          </button>
            
        </div>
    )
}

export default FilterButton