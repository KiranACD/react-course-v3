import { useState } from "react";
const Form = ({addColour}) => {

    const [colour, setColour] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addColour(colour);
    };
    return (
        <section className='container'>
            <h4>colour generator</h4>
            <form className='color-form' onSubmit={handleSubmit}>
                <input 
                    type="color"
                    value={colour}
                    onChange={(e)=>setColour(e.target.value)} />
                <input 
                    type="text" 
                    value={colour} 
                    onChange={(e)=>setColour(e.target.value)} 
                    placeholder='#f15025'/>
                <button
                    className='btn'
                    type='submit'
                    style={{background:colour}}>
                        submit
                </button>
            </form>
        </section>
    )
};

export default Form;