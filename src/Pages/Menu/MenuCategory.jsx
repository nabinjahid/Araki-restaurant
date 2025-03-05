import { Link } from 'react-router-dom';
import MenuItem from '../Home/MenuItem/MenuItem';
import Menu from './Menu';
import Button from '../../Components/Button/Button';

const MenuCategory = ({item,category}) => {
    
    return (
    
       <> <div className="grid md:grid-cols-2 gap-4 space-y-5">
        {item.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${category}`} className="text-center my-8">
          <Button btn={`orde ${category} food`}></Button>
        </Link>
      </>
    );
};

export default MenuCategory;