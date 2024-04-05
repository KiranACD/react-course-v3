import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";

const accessKey = '54mI_bXrLfiNv9Kp3wwUT9Rotb0h0wmLSOkZbFjI9Q8';
const secretKey = 'nv1aUTNPkPvVIGovKfD2Wx4wrCl4p2UjtJckVKPTwIc';

const App = () => {
  return (
  <main>
    <ThemeToggle />
    <SearchForm />
    <Gallery />
  </main>
  );
};
export default App;
