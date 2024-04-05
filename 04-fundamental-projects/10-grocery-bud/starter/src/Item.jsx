const Item = ({currItem, removeItem, editItem}) => {

    const handleItemDone = () => {
        editItem(currItem.id);
    }
    return (
        <div className='single-item'>
            <input type="checkbox" name='ItemDone' id='ItemDone' checked={currItem.completed} onChange={handleItemDone} />
            <p style={{textTransform: 'capitalize', textDecoration: currItem.completed && 'line-through'}}>{currItem.name}</p>
            <button type='button' className='btn remove-btn' onClick={()=>removeItem(currItem.id)}>remove</button>
        </div>
    )
};
export default Item;