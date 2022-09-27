import { faker } from "@faker-js/faker";

const productslist = [
  {
    id: "1",
    category: "electronics",
    name: "Electronics",
    imgdata: faker.image.food(500, 480),
  },
  {
    id: "2",
    category: "stationary",
    name: "Stationary",
    imgdata: faker.image.city(500, 480),
  },
  {
    id: "3",
    category: "automotives",
    name: "Automotives",
    imgdata: faker.image.nature(500, 480),
  },
  {
    id: "1",
    category: "toys",
    name: "Toys",
    imgdata: faker.image.nightlife(500, 480),
  },
  {
    id: "1",
    category: "sports",
    name: "Sports",
    imgdata: faker.image.sports(500, 480),
  },
  {
    id: "1",
    category: "health",
    name: "Health and Beauty",
    imgdata: faker.image.fashion(500, 480),
  },
];

export default productslist;
