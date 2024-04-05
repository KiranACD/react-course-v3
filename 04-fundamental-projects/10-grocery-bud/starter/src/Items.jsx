import Item from './Item';

const Items = ({items, removeItem, editItem}) => {

    return (
        <div className="items">
            {items.map((item)=>{
                return (
                    <Item key={item.id} currItem={item} removeItem={removeItem} editItem={editItem} />
                );
            })}
        </div>
    )
}

export default Items;