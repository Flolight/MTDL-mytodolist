import { React } from "react";

const Checkbox = (props)=>{
    return (
        <div className="flex">
        <div className="bg-white w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
          <input id={props.id} type="checkbox" defaultChecked={props.checked} onChange={() => props.toogleTaskCompleted(props.id)}/>
        </div>
        <label htmlFor={props.id}>
            {props.name}
        </label>
        </div>
    )
}

export default Checkbox;