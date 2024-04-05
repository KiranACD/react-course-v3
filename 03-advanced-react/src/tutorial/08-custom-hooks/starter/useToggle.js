import {useState} from 'react';

const useToggle = (defaultValue) => {
    const [show, setShow] = useState(defaultValue);

    const toggle = () => {
        setShow(!show);
    };
    return {show, toggle}; // Can also return an array of the same elements.
}

export default useToggle;