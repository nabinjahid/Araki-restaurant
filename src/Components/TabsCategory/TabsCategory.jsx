import FoodCard from '../FoodCard/FoodCard';

const TabsCategory = ({item}) => {
    return (
        <div className="grid md:grid-cols-3 gap-7">
          {item.map((item) => (
            <FoodCard key={item.id} item={item}></FoodCard>
          ))}
        </div>
    );
};

export default TabsCategory;