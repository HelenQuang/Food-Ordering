import styles from "../../UI/MealsAvailable.module.css";
import Card from "./Card";
import MealItem from "./MealItem";

const DUMMY_DATA = [
  {
    id: "m1",
    name: "Pho Soup",
    description: "Rice noodle in beef soup, served with beef and herbs",
    price: 15,
    image:
      "https://imageproxy.wolt.com/venue/5eaacf850e7fe6c4ddc0adda/999dd47a-8af8-11ea-a97b-0a58646cf405_shutterstock_1212650800.jpg",
  },
  {
    id: "m2",
    name: "Rice Noodle with Spring Rolls",
    description: "Rice noodle served with cripsy spring rolls and fish sauce",
    price: 15,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5ff32addc0022149b79d88ae/c29d3e04-bc77-11eb-97e4-96344d7c8b9f_9._bun_nem.jpeg",
  },
  {
    id: "m3",
    name: "Rice Noodle with Grilled Pork",
    description: "Rice noodle served with grilled pork, herbs and fish sauce",
    price: 14.5,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5ff32addc0022149b79d88ae/e4945a42-bc77-11eb-b867-aae1e0137f09_10._bun_thit_nuong.jpeg",
  },
  {
    id: "m4",
    name: "Fried Rice",
    description: "Fried rice with prawn, egg, carrot and bean",
    price: 14,
    image:
      "https://images.unsplash.com/photo-1637759079728-3f900db7a782?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
  },
  {
    id: "m5",
    name: "Summer Rolls",
    description: "Prawn, pork, rice noodle, herbs wrapped inside rice paper",
    price: 14,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5ff32addc0022149b79d88ae/88ec262a-bc77-11eb-b81b-327af205fc96_7._nem_cuon.jpeg",
  },
];

const MealsAvailable = () => {
  const mealsList = DUMMY_DATA.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      image={meal.image}
    />
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default MealsAvailable;
