import {React , useEffect , useState} from "react";
// import AmountForm from "./AmountForm";

import Card from "../UI/Card";

import MenuItem from "./MenuItem";

// const DUMMY_MEALS = {

//   "bar":
//     [
//       {
//         id: "b1",
//         name: "Negroni",
//         description: "Gin | Sweet Vermouth | Campari | Orange garnish",
//         price: 27,
//       },
//       {
//         id: "b2",
//         name: "Catena Malbec",
//         description: "Extremely popular!, Catena Malbec is an inky, medium-bodied, dry red wine with strong impressions of dark fruits on the nose and palate.!",
//         price: 59,
//       },
//       {
//         id: "b3",
//         name: "La Vieille Rosé",
//         description: "Pretty limpid and shiny colour of delicate pale pink rose petal",
//         price: 44,
//       },
//       {
//         id: "b4",
//         name: "Old Fashioned",
//         description: "Bourbon | Brown sugar | Angostura Bitters",
//         price: 35,
//       }
//     ],
  
//     "food":
//     [
//       {
//         id: "f1",
//         name: "Sushi",
//         description: "Finest fish and veggies",
//         price: 22.99,
//       },
//       {
//         id: "f2",
//         name: "Shnitzel",
//         description: "A german specialty!",
//         price: 16.5,
//       },
//       {
//         id: "f3",
//         name: "Cheese Burger",
//         description: "American, raw, meaty",
//         price: 12.99,
//       },
//       {
//         id: "f4",
//         name: "Veggie Bowl",
//         description: "Healthy...and green...",
//         price: 18.99,
//       }
//     ],

//     "dessert":
//     [
//       {
//         id: "d1",
//         name: "Caramel Candy",
//         description: "Rose & Strawberry, Milk Chocolate, Passionfruit, Chocolate & Cocoa Nibs, Vanilla & Sea Salt",
//         price: 22.99,
//       },
//       {
//         id: "d2",
//         name: "Chocolate Caramel Pralines",
//         description: "Traditionally made chocolates from Stockholm | Buttery caramel covered with the finest dark chocolate",
//         price: 16.5,
//       },
//       {
//         id: "d3",
//         name: "Pistachio Chocolates",
//         description: "No-frills chocolates | 84% Maranon cocoa content",
//         price: 12.99,
//       },
//       {
//         id: "d4",
//         name: "Tiramisu",
//         description: "Tiramisu is an Italian dessert that translates to “pick me up”, and it certainly does just that. ",
//         price: 18.99,
//       }
//     ]
// };








const Menu = (props) => {
  
  const [items, setItems] = useState([])

  useEffect( () => {

    let getData = async () => {
      const url = `https://navneet1anywhere.pythonanywhere.com/api/${props.selected === 'bar' ? 'drinks' : props.selected}`
  
      let response = await fetch(url)
      let data = await response.json()
      // console.log(data)
      setItems(data)
    }

    getData()

  }, [props.selected])

  
  

  return (
    <Card>
      <div className="flex flex-col py-2 md:px-2">

        {/* {DUMMY_MEALS[`${props.selected}`].map((meal) => (

          <MenuItem key={meal.id} id={meal.id} name={meal.name} description={meal.description}  price={meal.price} />

        ))} */}

        {items.map((meal) => (

        <MenuItem key={`${props.selected}-${meal.id}`} id={`${props.selected}-${meal.id}`} name={meal.name} description={meal.description}  price={meal.price} />

        ))}

      </div>
    </Card>
  );
};

export default Menu;
