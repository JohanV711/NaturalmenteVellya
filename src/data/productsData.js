export const products = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  price: "9.00",
  image: require(`../assets/products/details/product${i + 1}.webp`),
  detailImage: require(`../assets/products/details/product${i + 1}.webp`),
}));

const catalogProducts = [
    {
      id: 1,
      name: "Jabón de Arroz",
      images: [
        require("../assets/products/catalog/arroz1.webp"),
        require("../assets/products/catalog/arroz2.webp"),
        require("../assets/products/catalog/arroz3.webp"),
        require("../assets/products/catalog/arroz4.webp")
      ]
    },
    {
      id: 2,
      name: "Jabón de Avena y Miel",
      images: [
        require("../assets/products/catalog/avena_y_miel1.webp"),
        require("../assets/products/catalog/avena_y_miel2.webp")
      ]
    },
    {
      id: 3,
      name: "Jabón de Arcilla Rosa",
      images: [
        require("../assets/products/catalog/arcillarosa1.webp"),
        require("../assets/products/catalog/arcillarosa2.webp")
      ]
    },
    {
      id: 4,
      name: "Jabón de Carbón Activo",
      images: [
        require("../assets/products/catalog/carbon_activo1.webp"),
        require("../assets/products/catalog/carbon_activo2.webp")
      ]
    },
    {
      id: 5,
      name: "Jabón de Caléndula",
      images: [
        require("../assets/products/catalog/calendula1.webp")
      ]
    },
    {
      id: 6,
      name: "Jabón de Romero",
      images: [
        require("../assets/products/catalog/romero1.webp"),
        require("../assets/products/catalog/romero2.webp")
      ]
    },
    {
      id: 7,
      name: "Jabón Anti-Rosácea",
      images: [
        require("../assets/products/catalog/rosacea1.webp"),
        require("../assets/products/catalog/rosacea2.webp")
      ]
    },
    {
      id: 8,
      name: "Jabón de Lavanda",
      images: [
        require("../assets/products/catalog/lavanda1.webp"),
        require("../assets/products/catalog/lavanda2.webp"),
        require("../assets/products/catalog/lavanda3.webp")
      ]
    },
    {
      id: 9,
      name: "Jabón de Cúrcuma",
      images: [
        require("../assets/products/catalog/curcuma1.webp"),
        require("../assets/products/catalog/curcuma2.webp")
      ]
    },
    {
      id: 10,
      name: "Jabón de Coco",
      images: [
        require("../assets/products/catalog/coco1.webp"),
        require("../assets/products/catalog/coco2.webp"),
        require("../assets/products/catalog/coco3.webp"),
        require("../assets/products/catalog/coco4.webp")
      ]
    },
    {
      id: 11,
      name: "Jabón de Arroz y maicena",
      images: [
        require("../assets/products/catalog/arroz_y_maicena1.webp"),
        require("../assets/products/catalog/arroz_y_maicena2.webp")
      ]
    },
    {
      id: 12,
      name: "Jabón decorativo",
      images: [
        require("../assets/products/catalog/decorativo.webp"),
      ]
    },
    {
      id: 13,
      name: "Jabón de rosas",
      images: [
        require("../assets/products/catalog/rosas1.webp"),
        require("../assets/products/catalog/rosas2.webp")
      ]
    },
    {
      id: 14,
      name: "Jabón de sandía",
      images: [
        require("../assets/products/catalog/sandia1.webp"),
        require("../assets/products/catalog/sandia2.webp")
      ]
    }
  ];

  export {catalogProducts};