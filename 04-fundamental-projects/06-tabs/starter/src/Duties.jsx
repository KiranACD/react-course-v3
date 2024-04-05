import {FaAngleDoubleRight} from 'react-icons/fa';
import { v4 as uuidv4} from 'uuid';
const Duties = ({duties}) => {

    console.log(duties);
    return (
        <div>
            {duties.map((duty) => {
                const id = uuidv4(); // This is a better option than passing index as key.
                return (
                    <div key={id} className='job-desc'>
                        <FaAngleDoubleRight className='job-icon' />
                        <p>{duty}</p>
                    </div>
                );
            })}
        </div>
    );
    // return <div>Duty</div>
};

export default Duties;