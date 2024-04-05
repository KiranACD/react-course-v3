import Title from './components/Title';
import Setup from './examples/6-interceptors';
// import './axios/global'; // importing the file here will make the global attributes available everywhere.
// Only required for the global instance. 
function App() {
  return (
    <main>
      <Title />
      <Setup />
    </main>
  );
}

export default App;
