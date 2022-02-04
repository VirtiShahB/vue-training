var items = [
  {
    Id: 1,
    ProductName: "Bolt headphone",
    Price: "25.99",
    Description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    Image: "earphone.jpeg",
    Model: "Bolt",
    Color: "Black and white",
    Favorite: 0,
    Tag: "Bolt"
  },
  {
    Id: 2,
    ProductName: "JBL headphone",
    Price: "40.99",
    Description:
      "JBL headphone is great product of the printing and typesetting industry.",
    Image: "jbl-headphone.jpeg",
    Model: "JBL",
    Color: "Grey and white",
    Favorite: 0,
    Tag: "Jbl"
  },
  {
    Id: 3,
    ProductName: "Sony headphone",
    Price: "50.99",
    Description: "This is just text of the printing and typesetting industry. Very nice product",
    Image: "sony-headphone.jpeg",
    Model: "Sony",
    Color: "Blue and black",
    Favorite: 0,
    Tag: "Sony"
  },
  {
    Id: 4,
    ProductName: "Samsung headphone",
    Price: "35.99",
    Description: "This is just text of the printing and typesetting industry.Very nice product",
    Image: "samsung-headphone.webp",
    Model: "Samsung",
    Color: "Blue and black",
    Favorite: 0,
    Tag: "Jbl"
  },
  {
    Id: 5,
    ProductName: "JBL headphone",
    Price: "44.99",
    Description: "This is just text of the printing and typesetting industry.",
    Image: "bass-headphone.jpg",
    Model: "JBL",
    Color: "Blue and black",
    Favorite: 0,
    Tag: "Jbl"
  },
  {
    Id: 6,
    ProductName: "Bolt headphone",
    Price: "35.99",
    Description: "This is just text of the printing and typesetting industry.",
    Image: "earphone.jpeg",
    Model: "Bolt",
    Color: "Red and black",
    Favorite: 0,
    Tag: "Bolt"
  },
  {
    Id: 7,
    ProductName: "Over-Ear headphone",
    Price: "65.99",
    Description: "This is just text of the printing and typesetting industry.",
    Image: "over-head-earphone.png",
    Model: "Sony",
    Color: "White and black",
    Favorite: 0,
    Tag: "Sony"
  },
  {
    Id: 8,
    ProductName: "On-Ear headphone",
    Price: "34.99",
    Description: "Lorem lipsum is the simply text printing and typesetting industry.",
    Image: "sony-headphone.jpeg",
    Model: "Sony",
    Color: "Blue and black",
    Favorite: 0,
    Tag: "Sony"
  },
  {
    Id: 9,
    ProductName: "True Wireless Earbuds",
    Price: "80.99",
    Description: "This is the true wireless earbuds and typesetting industry.",
    Image: "jbl-headphone.jpeg",
    Model: "Sony",
    Color: "Blue and black",
    Favorite: 0,
    Tag: "Bolt"
  },
  {
    Id: 10,
    ProductName: "Wired Earbuds",
    Price: "60.99",
    Description: "This is just text of the printing and typesetting industry.",
    Image: "earbuds.jpeg",
    Model: "Sony",
    Color: "Blue and black",
    Favorite: 0,
    Tag: "Bolt"
  },
];

if (localStorage.getItem("items") === null) {
  localStorage.setItem("items", JSON.stringify(items));
} else {
  items = JSON.parse(localStorage.getItem("items"));
}
export default items;
