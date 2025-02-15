import MenuItem from '../Home/MenuItem/MenuItem';

const MenuCategory = ({item}) => {
    
    return (
        <div className="grid md:grid-cols-2 gap-4 space-y-5">
        {item.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    );
};

export default MenuCategory;