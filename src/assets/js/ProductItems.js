var items = [
  {
    id: 1,
    productName: "Bolt headphone",
    price: "25.99",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "earphone.jpeg",
    model: "Bolt",
    color: "Black and white",
    favorite: 0,
    tag: "Bolt"
  },
  {
    id: 2,
    productName: "JBL headphone",
    price: "40.99",
    description:
      "JBL headphone is great product of the printing and typesetting industry.",
    image: "jbl-headphone.jpeg",
    model: "JBL",
    color: "Grey and white",
    favorite: 0,
    tag: "Jbl"
  },
  {
    id: 3,
    productName: "Sony headphone",
    price: "50.99",
    description: "This is just text of the printing and typesetting industry. Very nice product",
    image: "sony-headphone.jpeg",
    model: "Sony",
    color: "Blue and black",
    favorite: 0,
    tag: "Sony"
  },
  {
    id: 4,
    productName: "Samsung headphone",
    price: "35.99",
    description: "This is just text of the printing and typesetting industry.Very nice product",
    image: "samsung-headphone.webp",
    model: "Samsung",
    color: "Blue and black",
    favorite: 0,
    tag: "Jbl"
  },
  {
    id: 5,
    productName: "JBL headphone",
    price: "44.99",
    description: "This is just text of the printing and typesetting industry.",
    image: "bass-headphone.jpg",
    model: "JBL",
    color: "Blue and black",
    favorite: 0,
    tag: "Jbl"
  },
  {
    id: 6,
    productName: "Bolt headphone",
    price: "35.99",
    description: "This is just text of the printing and typesetting industry.",
    image: "istockphoto-835148968-170667a.jpg",
    model: "Bolt",
    color: "Red and black",
    favorite: 0,
    tag: "Bolt"
  },
  {
    id: 7,
    productName: "Over-Ear headphone",
    price: "65.99",
    description: "This is just text of the printing and typesetting industry.",
    image: "over-head-earphone.png",
    model: "Sony",
    color: "White and black",
    favorite: 0,
    tag: "Sony"
  },
  {
    id: 8,
    productName: "On-Ear headphone",
    price: "34.99",
    description: "Lorem lipsum is the simply text printing and typesetting industry.",
    image: "istockphoto-1309150577-170667a.jpg",
    model: "Sony",
    color: "Blue and black",
    favorite: 0,
    tag: "Sony"
  },
  {
    id: 9,
    productName: "True Wireless Earbuds",
    price: "80.99",
    description: "This is the true wireless earbuds and typesetting industry.",
    image: "photo-1484704849700-f032a568e944.jpeg",
    model: "Sony",
    color: "Blue and black",
    favorite: 0,
    tag: "Bolt"
  },
  {
    id: 10,
    productName: "Wired Earbuds",
    price: "60.99",
    description: "This is just text of the printing and typesetting industry.",
    image: "earbuds.jpeg",
    model: "Sony",
    color: "Blue and black",
    favorite: 0,
    tag: "Bolt"
  },
];

if (localStorage.getItem("items") === null) {
  localStorage.setItem("items", JSON.stringify(items));
} else {
  items = JSON.parse(localStorage.getItem("items"));
}
export default items;
