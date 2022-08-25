import React, {useState} from 'react';

const EventExample: React.FC = () => {
    const [value, setValue] = useState<string>('');

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value);
    };

    return (
        <div>
            <input className="border border-gray-400 m-2 p-2 rounded"
                   value={value}
                   onChange={changeHandler}
                   type="text"
                   placeholder="Enter..."/>
            <button onClick={clickHandler}>Click me</button>
        </div>
    );
};

export default EventExample;