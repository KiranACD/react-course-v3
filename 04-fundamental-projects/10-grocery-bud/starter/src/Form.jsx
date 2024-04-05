import { useState } from "react"
import { toast } from 'react-toastify';

const Form = ({addItems}) => {
    const [item, setItem] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!item) {
            toast.error('Please provide a value')
            return
        };
        addItems(item);
        // if (items){
        //     const newItems = [...items, item];
        //     setItems(newItems);
        // } else {
        //     const newItems = [item];
        //     setItems(newItems);
        // }
        setItem('');
        
    };
    return (
        // <section className="container">
        //     <form onSubmit={handleSubmit}>
        //         <input type="text" value={item} onChange={(e)=>setItem(e.target.value)}/>
        //     </form>
        // </section>
        <form onSubmit={handleSubmit}>
            <h4>grocery bud</h4>
            <div className="form-control">
                <input 
                    type="text"
                    className='form-input'
                    value={item}
                    onChange={(e)=>setItem(e.target.value)} />
                <button type='submit' className='btn'>add item</button>
            </div>
        </form>
    );
};

export default Form;