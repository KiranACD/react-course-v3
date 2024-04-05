import UserContainer from "./UserContainer";

const links = [
    {
      id: 1,
      url: '/',
      text: 'home',
    },
    {
      id: 2,
      url: '/about',
      text: 'about',
    }
];

const Navlinks = () => {
    return (
        <div className='nav-container'>
            <ul className="nav-links">
                {links.map((link) => {
                    const {id, url, text} = link;
                    return <li>
                            <a key={id} href={url}>{text}</a>
                        </li>
                })}
            </ul>
            <UserContainer />
        </div>
    );
}

export default Navlinks;