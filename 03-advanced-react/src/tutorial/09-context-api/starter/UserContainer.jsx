import { useAppContext } from "./Navbar";

const UserContainer = () => {

    const {user, logout} = useAppContext();
    return (
        <div className='user-container'>{ user? (
            <>
              <p>Welcome {user?.name?.toUpperCase()}</p>
              <button className='btn' type='button' onClick={logout}>Logout</button>
            </>
        ) : (
            <p>Please Login</p>
        )
        }
        </div>
    )

}

export default UserContainer;