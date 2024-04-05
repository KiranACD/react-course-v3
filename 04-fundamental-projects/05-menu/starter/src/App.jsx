import Title from './Title';
import menu from './data.js';
import Menu from './Menu';
import {useState} from 'react';
import Categories from './Categories';

// const tempCategories = menu.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// const tempItems = ['all', ...tempSet];

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const App = () => {

  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterCategories = (category) => {
    if (category === 'all') {
      setMenuItems(menu);
      return
    }
    const newMenuItems = menu.filter((item) => item.category === category);
    setMenuItems(newMenuItems);
  }
  return <main>
    <section className="menu">
      <Title title={'Our Menu'}/>
      <Categories categories={categories} filterCategories={filterCategories}/>
      <Menu items={menuItems} />
    </section>
  </main>
};
export default App;
