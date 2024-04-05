import { useFetchTasks } from './reactQueryCustomHooks';
import SingleItem from './SingleItem';

const Items = () => {

  const {isLoading, isError, data} = useFetchTasks();

  /*
Another option is to declare the queryFn using async and await
queryFn: async () => {
  const {data} = await customFetch.get('/');
  return data;
};


  */
  if (isLoading) {
    return <p style={{marginTop:'1rem'}}>Loading...</p>
  }

  // if (isError) {
  //   return <p style={{marginTop:'1rem'}}>{error.message}</p> // error.message is the axios message. 
  // }

  // If the server send an error, we can access it in error.response.data

  if (isError) {
    return <p style={{marginTop:'1rem'}}>{error.response.data}</p> // error.message is the axios message. 
  }
  return (
    <div className='items'>
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
