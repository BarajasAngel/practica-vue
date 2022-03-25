import { createStore } from "vuex";

export default createStore({
  state: {
    cakeShow: [
      {
        name: "Pastel chocoflan",
        url: require("@/assets/pastel1.jpg"),
        precio: "$105.00",
        id: 1,
      },
      {
        name: "Pastel chocolate",
        url: require("@/assets/pastel2.jpg"),
        precio: "$125.00",
        id: 2,
      },
      {
        name: "Pastel galleta",
        url: require("@/assets/pastel3.jpg"),
        precio: "$112.00",
        id: 3,
      },
      {
        name: "Pastel cereza",
        url: require("@/assets/pastel4.jpg"),
        precio: "$215.00",
        id: 4,
      },
      {
        name: "Pastel naranja",
        url: require("@/assets/pastel5.jpg"),
        precio: "$199.00",
        id: 5,
      },
      {
        name: "Pastel flan",
        url: require("@/assets/pastel6.jpg"),
        precio: "$150.00",
        id: 6,
      },
    ],
    tasteCake: [
      {
        name: "Chocolate",
        url: require("@/assets/Sabor1.jpg"),
        precio: "$100.00",
        id: 1,
      },
      {
        name: "Vainilla",
        url: require("@/assets/Sabor2.jpg"),
        precio: "$50.00",
        id: 2,
      },
      {
        name: "Fresa",
        url: require("@/assets/Sabor3.jpg"),
        precio: "$99.00",
        id: 3,
      },
      {
        name: "Limón",
        url: require("@/assets/Sabor4.jpg"),
        precio: "$125.00",
        id: 4,
      },
      {
        name: "Café",
        url: require("@/assets/Sabor5.jpg"),
        precio: "$199.00",
        id: 5,
      },
      {
        name: "Red velvet",
        url: require("@/assets/Sabor6.jpg"),
        precio: "$252.00",
        id: 6,
      },
      {
        name: "Coco",
        url: require("@/assets/Sabor7.jpg"),
        precio: "$199.00",
        id: 7,
      },
      {
        name: "Zanahoria",
        url: require("@/assets/Sabor8.jpg"),
        precio: "$199.00",
        id: 8,
      },

    ],
    decorationCake: [
      {
        name: "Frutas",
        url: require("@/assets/Decoracion1.jpg"),
        precio: "$50.00",
        id: 1,
      },
      {
        name: "Fondant",
        url: require("@/assets/Decoracion2.jpg"),
        precio: "$25.00",
        id: 2,
      },
      {
        name: "Chantilly",
        url: require("@/assets/Decoracion3.jpg"),
        precio: "$30.00",
        id: 3,
      },
      {
        name: "Merengue",
        url: require("@/assets/Decoracion4.jpg"),
        precio: "$15.00",
        id: 4,
      },
      {
        name: "Caramelo",
        url: require("@/assets/Decoracion5.jpg"),
        precio: "$55.00",
        id: 5,
      },
    ],
    Iztapalapa: [
      {
        dire: "Avenida San Lorenzo #69, Colonia Ampliación San Miguel.",
        tel: "(55) 937-77-492",
        id: "1",
      },
      {
        dire: "Prol. Plutarco Elías Calles #2531, Colonia Alfonso Tirado",
        tel: "(55) 768-20-364",
        id: "2",
      },
      {
        dire: "Calzada Ermita Iztapalapa #4052, Colonia Santa Martha Acatitla",
        tel: "(55) 705-93-572",
        id: "3",
      },
      {
        dire: "Avenida Santa Cruz Meyehualco #48, Colonia Ampliación Santa María Azt.",
        tel: "(55) 050-73-765",
        id: "4",
      },
    ],
    Cuauhtemoc: [
      {
        dire: "Nezahualcóyotl #184, esquina con 20 de Noviembre, Colonia Centro.",
        tel: "(55) 922-79-338",
        id: "1",
      },
      {
        dire: "Avenida Ribera de San Cosme #157, esquina con Circuito Interior",
        tel: "(55) 868-99-757",
        id: "2",
      },
      {
        dire: "Prolongación Cruz Blanca #12 Esq. con Luis Cabrera, Colonia Cuauhtémoc",
        tel: "(55) 522-22-730",
        id: "3",
      },
    ],
    Gustavo: [
      {
        dire: "Avenida Centenario #1262, Colonia Atzacoalco.",
        tel: "(55)066-86-803",
        id: "1",
      },
      {
        dire: "Calle Apango #21, Cuautepec Barrio Alto",
        tel: "(55)476-05-295",
        id: "2",
      },
      {
        dire: "Avenida Instituto Politécnico Nacional #5130 (esquina con Avenida)",
        tel: "(55)568-90-693",
        id: "3",
      },
      {
        dire: "Calzada Ticomán # 1149, Colonia La Laguna Ticomán",
        tel: "(55)430-61-013",
        id: "4",
      },
      {
        dire: "Calle Cuatro #3, Colonia Progreso Nacional",
        tel: "(55)142-22-469",
        id: "5",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
