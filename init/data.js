const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      url: "https://assets.cntraveller.in/photos/674d55d65f5c2eb8984f18f3/master/w_1600%2Cc_limit/Hotel%2520Santa%2520Caterina_HOTEL-SANTA-CATERINA-ITALY-Chalet-Giulietta-&-Romeo-2-Gold-List-Oct24-Pr-Global.jpg",
      filename: "cozy-beachfront-cottage.jpg",
    },
    price: 1500,
    location: "Goa",
    country: "India",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      url: "https://media.cntraveler.com/photos/673f6c2efa1f43684389dc19/master/w_1600%2Cc_limit/One&Only%2520Mandarina-Drone-Alma-Restaurant-Gold-List-Oct24-PR-Global.jpg",
      filename: "modern-loft-in-downtown.jpg",
    },
    price: 1200,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      url: "https://media.cntraveler.com/photos/66db2d911858ba3644e56b8c/1:1/w_2000,h_2000,c_limit/Splendido%20Belmond_SPL-POOL-32.jpg",
      filename: "mountain-retreat.jpg",
    },
    price: 1000,
    location: "Manali",
    country: "India",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2KJfGb2XLtysUCAKmfBFpd3CRS5PcdPkb-w&s",
      filename: "historic-villa-in-tuscany.jpg",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Treehouse Getaway in Coorg",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      url: "https://images.unsplash.com/photo-1618767689159-1bfda407947b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJlZSUyMGhvdXNlfGVufDB8fDB8fHww",
      filename: "treehouse-getaway-in-coorg.jpg",
    },
    price: 900,
    location: "Coorg",
    country: "India",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      url: "https://i.insider.com/5d127144b44ce74f67605ed5?width=700",
      filename: "luxury-penthouse-with-city-views.jpg",
    },
    price: 3500,
    location: "Dubai",
    country: "UAE",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      url: "https://images.pexels.com/photos/60217/pexels-photo-60217.jpeg?cs=srgb&dl=pexels-recalmedia-60217.jpg&fm=jpg",
      filename: "rustic-cabin-by-the-lake.jpg",
    },
    price: 900,
    location: "Nainital",
    country: "India",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      url: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      filename: "beachfront-paradise.jpg",
    },
    price: 2000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Historic Cottage in Jaipur",
    description:
      "Experience royal charm in this historic Rajasthani cottage built with sandstone and heritage architecture.",
    image: {
      url: "https://s7ap1.scene7.com/is/image/incredibleindia/hawa-mahal-jaipur-rajasthan-city-1-hero?qlt=82&ts=1742200253577",
      filename: "historic-cottage-in-jaipur.jpg",
    },
    price: 1700,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Tea Estate Villa in Munnar",
    description:
      "Wake up to lush green tea gardens and misty mornings in this cozy villa in Munnar.",
    image: {
      url: "https://assets.cntraveller.in/photos/63a53dc3d7caa4e531854e77/master/pass/ROOM%20WITH%20A%20VIEW%20LEAD.jpg",
      filename: "tea-estate-villa-in-munnar.jpg",
    },
    price: 1900,
    location: "Munnar",
    country: "India",
  },
  {
    title: "Luxury Chalet in Switzerland",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr5FAz7K-2SUAISR0DLHXkcw3PWCAFfR7bFg&s",
      filename: "luxury-chalet-in-switzerland.jpg",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Houseboat in Kerala Backwaters",
    description:
      "Sail through tranquil backwaters in this luxury houseboat experience in God's Own Country.",
    image: {
      url: "https://publish.purewow.net/wp-content/uploads/sites/2/2022/05/top-summer-vacation-destinations-2022-cat.jpg?fit=728%2C524",
      filename: "houseboat-in-kerala-backwaters.jpg",
    },
    price: 2200,
    location: "Alleppey",
    country: "India",
  },
  {
    title: "Colonial Bungalow in Shimla",
    description:
      "Stay in a heritage British-era bungalow with stunning mountain views and old-world charm.",
    image: {
      url: "https://assets.cntraveller.in/photos/61eea0e84f2585b4c1c3a904/16:9/w_1024%2Cc_limit/jh%2520snowfall.jpeg",
      filename: "colonial-bungalow-in-shimla.jpg",
    },
    price: 2100,
    location: "Shimla",
    country: "India",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNT2XnijdyQOauhoo4CnnPNOho3d68Y36hmw&s",
      filename: "private-island-retreat.jpg",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
];

module.exports = { data: sampleListings };
