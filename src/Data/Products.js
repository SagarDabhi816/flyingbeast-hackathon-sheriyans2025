const products = [
  // Energy Bars
  {
    id: "energy-bar-1",
    name: "COCOA & ALMOND",
    price: 290,
    category: "Energy Bars",
    description:
      "Delicious almond energy bar packed with nuts and natural sweetness.",

    images: [
      "https://www.rosierfoods.com/cdn/shop/files/Pack_of_3_Bars_Image.jpg?v=1743771118&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/Pack_of_3_Back_1.jpg?v=1743771124&width=823", // Optional extra images
      "https://www.rosierfoods.com/cdn/shop/files/Orange_Ingredients_Image.jpg?v=1743769781&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/6_Orange_Cocoa.jpg?v=1743769781&width=823",
    ],
  },
  {
    id: "energy-bar-2",
    name: "ORANGE & COCOA",
    price: 290,
    category: "Energy Bars",
    description: "Orange and cocoa energy bar with zesty notes.",

    images: [
      "https://www.rosierfoods.com/cdn/shop/files/4_Orange_Cocoa.jpg?v=1743769781&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/Orange_Ingredients_Image.jpg?v=1743769781&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/6_Orange_Cocoa.jpg?v=1743769781&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/4_Orange_Cocoa.jpg?v=1743769781&width=823"
    ],
  },
  {
    id: "energy-bar-3",
    name: "BERRY & COCONUT",
    price: 290,
    category: "Energy Bars",
    description: "Berry and coconut blend for natural sweetness and crunch.",
    image:
      "https://www.rosierfoods.com/cdn/shop/files/7_Berry_Coconut.jpg?v=1743769781&width=823",
  },
  {
    id: "energy-bar-4",
    name: "All 3 FLAVOURS",
    price: 290,
    category: "Energy Bars",
    description: "Assorted pack featuring all three energy bar flavors.",
    image:
      "https://www.rosierfoods.com/cdn/shop/files/Pack_of_3_Bars_Image.jpg?v=1743771118&width=823",
  },

  // Oil
  {
    id: "oil-1",
    name: "Stone Pressed Groundnut Oil 1L",
    price: 390,
    category: "Oil",
    description:
      "Pure wood pressed groundnut oil, cold extracted for natural nutrition.",
    images: [
      "https://www.rosierfoods.com/cdn/shop/files/4_820331d1-d211-419f-951b-9b7e1b53353c.jpg?v=1746737560&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/2_742554dc-b520-4bce-8d25-9098652d39b3.jpg?v=1746737567&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/3_8b1bd8da-eff1-4e7e-8968-22ee057b6ef8.jpg?v=1746737589&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/5_7cf57aad-6e6c-4f72-9695-0f98e6107af9.jpg?v=1746737581&width=823"
    ],
  },
  {
    id: "oil-2",
    name: "Stone Pressed Sesame Oil 1L",
    price: 410,
    category: "Oil",
    description: "Unrefined sesame oil from traditional extraction.",
    images:[ "https://www.rosierfoods.com/cdn/shop/files/2_48aff5ad-da7c-4270-ba88-6d39f339ba0c.jpg?v=1746737512&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/4_16f332eb-230b-49e3-9ee0-46eb1baf7884.jpg?v=1746737525&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/3_8d84b391-a94c-47f2-9f11-b818ee99e47a.jpg?v=1746737550&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/5_ab980d96-5bd8-4d79-9cb3-18e1962511b7.jpg?v=1746737532&width=823"
    ]
     
  },

  // Wheat
  {
    id: "wheat-1",
    name: "Whole Wheat Atta 5kg",
    price: 400,
    category: "Wheat",
    description: "Stone-ground whole wheat flour for soft, nutritious rotis.",
    image:
      "https://www.rosierfoods.com/cdn/shop/files/wheat_atta.jpg?v=1743771118&width=823",
  },

  // Ghee
  {
    id: "ghee-1",
    name: "A2 Gir Cow Ghee 500ml",
    price: 750,
    category: "Ghee",
    description:
      "Clarified butter from A2 Gir cow milk, traditionally churned.",
    image:
      "https://www.rosierfoods.com/cdn/shop/files/a2_ghee.jpg?v=1743771118&width=823",
  },

  // Nut Butters
  {
    id: "nut-butter-1",
    name: "Almond Butter 200g",
    price: 299,
    category: "Nut Butters",
    description: "100% natural almond butter, no added sugar or oils.",
    image:
      "https://www.rosierfoods.com/cdn/shop/files/almond_butter.jpg?v=1743771118&width=823",
  },
  {
    id: "nut-butter-2",
    name: "Peanut Butter 200g",
    price: 199,
    category: "Nut Butters",
    description: "Creamy and crunchy peanut butter, high in protein.",
    image:
      "https://www.rosierfoods.com/cdn/shop/files/peanut_butter.jpg?v=1743771118&width=823",
  },

  // Pooja Essentials
  {
    id: "pooja-1",
    name: "Pure Cow Ghee Diya",
    price: 180,
    category: "Pooja Essentials",
    description: "Cow ghee diya ready for daily rituals.",
    image:
      "https://www.rosierfoods.com/cdn/shop/files/ghee_diya.jpg?v=1743771118&width=823",
  },
  {
    id: "pooja-2",
    name: "Sambrani Dhoop Cups",
    price: 120,
    category: "Pooja Essentials",
    description: "Traditional dhoop cups for aromatic pooja experience.",
    image:
      "https://www.rosierfoods.com/cdn/shop/files/sambrani_dhoop.jpg?v=1743771118&width=823",
  },
  // Protein Bites
  {
    id: "protein-bite-1",
    name: "Protein Bite - Peanut Power",
    price: 120,
    category: "Protein Bites",
    description: "Protein-rich peanut bites for sustained energy.",
    image: "https://rosierfoods.com/images/protein-bite-peanut.jpg",
  },
  {
    id: "protein-bite-2",
    name: "Protein Bite - Choco Nut",
    price: 125,
    category: "Protein Bites",
    description: "Chocolate and nut protein bites for healthy snacking.",
    image: "https://rosierfoods.com/images/protein-bite-choconut.jpg",
  },
];

export default products;
