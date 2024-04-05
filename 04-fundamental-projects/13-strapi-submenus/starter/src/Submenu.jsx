import { useGlobalContext } from "./context";
import sublinks from "./data";
import { useRef } from 'react';
const Submenu = () => {

    const {pageId, setPageId} = useGlobalContext();
    const currentPage = sublinks.find((item) => item.pageId === pageId);
    const submenuContainer = useRef(null);
    const handleMouseLeave = (event) => {
        console.log(event);
        const submenu = submenuContainer.current;
        const {left, right, bottom } = submenu.getBoundingClientRect();
        console.log(left, right, bottom);
        console.log(event.clientX, event.clientY);
        if (event.clientX < left+1 || event.clientX > right-1 || event.clientY > bottom-1) {
            setPageId(null);
        }     
    };
    return <div className={currentPage?'submenu show-submenu':'submenu'} onMouseLeave={handleMouseLeave} ref={submenuContainer}>
        <h5>{currentPage?.page}</h5>
        <div className="submenu-links" style={{gridTemplateColumns:currentPage?.links?.length > 3? '1fr 1fr':'1fr'}}>
            {currentPage?.links?.map((link) => {
                const {id, url, label, icon} = link;
                return <a key={id} href={url}>
                    {icon}
                    {label}
                </a>
            })}
        </div>
    </div>

};

export default Submenu;