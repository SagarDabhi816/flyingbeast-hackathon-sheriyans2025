const products = [
  // Ghee
  {
    id: "ghee-1",
    name: "A2 Gir Cow Ghee 500ml",
    price: 750,
    category: "Ghee",
    description:
      "Clarified butter from A2 Gir cow milk, traditionally churned.",
    images: [
      "https://www.rosierfoods.com/cdn/shop/files/Untitled_Artwork62.jpg?v=1746308532&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/Untitled_Artwork61.jpg?v=1753355631&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/Untitled_Artwork60.jpg?v=1753355631&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/Untitled_Artwork64.jpg?v=1753355631&width=823",
    ],
  },

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
      "https://www.rosierfoods.com/cdn/shop/files/4_Orange_Cocoa.jpg?v=1743769781&width=823",
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

  // Nut Butters
  {
    id: "nut-butter-1",
    name: "Nut Butter Dark Chocolate",
    price: 299,
    category: "Nut Butters",
    description: "100% natural almond butter, no added sugar or oils.",
    images: [
      "https://www.rosierfoods.com/cdn/shop/files/dark_choco_front_65d098de-da74-46fe-8524-d15caa20a2bf.jpg?v=1743062114&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/dark_chocolate_back_dbff62cf-c349-4b01-a04a-51bd8d4eff9b.jpg?v=1743060272&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/Dark_choco_back_265728ce-0e58-454a-80b2-440383dbb90a.jpg?v=1743060280&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/IMG-2198_35d177c6-8581-459b-8ca1-a604c51d55fe.jpg?v=1743062105&width=823",
    ],
  },
  {
    id: "nut-butter-2",
    name: "Almond Butter Crunchy",
    price: 199,
    category: "Nut Butters",
    description: "Creamy and crunchy almond butter.",
    images: [
      "https://www.rosierfoods.com/cdn/shop/files/almondfront.jpg?v=1743060338&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/almondbutterback.jpg?v=1743060333&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/almondside.jpg?v=1743060327&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/almondfront.jpg?v=1743060338&width=823",
    ],
  },
  {
    id: "nut-butter-3",
    name: "Crunchy Almond Butter & Dark Chocolate Nut Butter Combo",
    price: 945,
    category: "Nut Butters",
    description: "Combo offer",
    images: [
      "https://www.rosierfoods.com/cdn/shop/files/IMG-1795.jpg?v=1743060382&width=823",
    ],
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
      "https://www.rosierfoods.com/cdn/shop/files/5_7cf57aad-6e6c-4f72-9695-0f98e6107af9.jpg?v=1746737581&width=823",
    ],
  },
  {
    id: "oil-2",
    name: "Stone Pressed Sesame Oil 1L",
    price: 410,
    category: "Oil",
    description: "Unrefined sesame oil from traditional extraction.",
    images: [
      "https://www.rosierfoods.com/cdn/shop/files/2_48aff5ad-da7c-4270-ba88-6d39f339ba0c.jpg?v=1746737512&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/4_16f332eb-230b-49e3-9ee0-46eb1baf7884.jpg?v=1746737525&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/3_8d84b391-a94c-47f2-9f11-b818ee99e47a.jpg?v=1746737550&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/5_ab980d96-5bd8-4d79-9cb3-18e1962511b7.jpg?v=1746737532&width=823",
    ],
  },

  // Honey
  {
    id: "honey-1",
    name: "Wild Forest Honey",
    price: 180,
    category: "Honey",
    description: "Wild Forest honey ",
    images: [
      "https://www.rosierfoods.com/cdn/shop/files/honey500front.jpg?v=1743060344&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/newoldhoneypostforlisting.jpg?v=1743060337&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/nutritionfactsposthoney_300g.jpg?v=1743060349&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/RawWildForestHoney_Meerut.jpg?v=1743060328&width=823",
    ],
  },

  // Pooja Essentials
  {
    id: "pooja-1",
    name: "Sraddha White Musk Dhoop Incense Sticks",
    price: 180,
    category: "Pooja Essentials",
    description: "White Musk Dhoop Incense Sticks.",
    images: [
      "https://www.rosierfoods.com/cdn/shop/files/front_7eb8763f-4b4d-4236-a804-d6ad37b421b6.jpg?v=1743061092&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/freeSafeGripStand_2.jpg?v=1743060986&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/IMG-3819.jpg?v=1743061043&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/White_Musk_Back.jpg?v=1743062140&width=823",
    ],
  },
  {
    id: "pooja-2",
    name: "Rosier Havan Cups – Bakhoor",
    price: 290,
    category: "Pooja Essentials",
    description: "Traditional dhoop cups for aromatic pooja experience.",
    images: [
      "https://www.rosierfoods.com/cdn/shop/files/BakhoorCupFront.jpg?v=1743151438&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/BakhoorStand.jpg?v=1743151474&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/BakhoorCupBack.jpg?v=1743151437&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/BakhoorCup.jpg?v=1743151463&width=823",
    ],
  },

  // Wheat
  {
    id: "wheat-1",
    name: "Whole Wheat Atta 5kg",
    price: 400,
    category: "Wheat",
    description: "Stone-ground whole wheat flour for soft, nutritious rotis.",
    images: [
      "https://www.rosierfoods.com/cdn/shop/files/Bestseller.jpg?v=1743589042&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/Glycemic_Index_5kg.jpg?v=1743752714&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/3_cf0af3cb-5ad3-40ba-b11c-5ddf680d064e.jpg?v=1743752714&width=823",
      "https://www.rosierfoods.com/cdn/shop/files/5_f799b3f4-7226-4736-a884-5b16c22e3b3b.jpg?v=1743676455&width=823",
    ],
  },
];

export default products;
