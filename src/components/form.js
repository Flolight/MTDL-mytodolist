import React, { useState } from "react";

const Form = (props) => {
    const [name, setName] = useState('');
    function handleChange(e) {
        setName(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(name);
        setName("");
    };
    return(
        <form onSubmit={handleSubmit}>
            <h2>
                <label htmlFor="new-todo-input" className="text-3xl font-semibold mb-8">
                    What should we do ?
                </label>
            </h2>
            <input 
                type="text"
                id="new-todo-input"
                name="text"
                autoComplete="off"
                className="bg-gray-200 focus:bg-white border-black border-solid border-2 px-2 py-1 w-full mb-4 hover:bg-white rounded"
                value={name}
                onChange={handleChange}
            />
            <div className="flex justify-center">
                <button
                    type="submit"
                    className="bg-blue-500 over:.bg-blue-700 text-white hover:text-gray-200 font-bold py-2 px-4 rounded"
                >
                    Add
                </button>
            </div>
        </form>
    );
}


export default Form;