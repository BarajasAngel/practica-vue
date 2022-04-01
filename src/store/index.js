import { createStore } from "vuex";

export default createStore({
  state: {
    user: [],
    cakeShow: [
      {
        name: "Pastel chocoflan",
        url: require("@/assets/pastel1.jpg"),
        precio: "$105.00",
        id: 1,
        color: "#00c176",
        numero: 100,
        porcentaje: 0,
      },
      {
        name: "Pastel chocolate",
        url: require("@/assets/pastel2.jpg"),
        precio: "$125.00",
        id: 2,
        color: "#00c176",
        numero: 100,
        porcentaje: 0,
      },
      {
        name: "Pastel galleta",
        url: require("@/assets/pastel3.jpg"),
        precio: "$112.00",
        id: 3,
        color: "#00c176",
        numero: 100,
        porcentaje: 0,
      },
      {
        name: "Pastel cereza",
        url: require("@/assets/pastel4.jpg"),
        precio: "$215.00",
        id: 4,
        color: "#00c176",
        numero: 100,
        porcentaje: 0,
      },
      {
        name: "Pastel naranja",
        url: require("@/assets/pastel5.jpg"),
        precio: "$199.00",
        id: 5,
        color: "#00c176",
        numero: 100,
        porcentaje: 0,
      },
      {
        name: "Pastel flan",
        url: require("@/assets/pastel6.jpg"),
        precio: "$150.00",
        id: 6,
        color: "#00c176",
        numero: 100,
        porcentaje: 0,
      },
    ],
    tasteCake: [
      {
        name: "Chocolate",
        url: require("@/assets/Sabor1.jpg"),
        precio: "$100.00",
        id: 1,
        color: "#00c176",
        numero: 100,
        porcentaje: 0,
        identificador: "cho",
      },
      {
        name: "Vainilla",
        url: require("@/assets/Sabor2.jpg"),
        precio: "$50.00",
        id: 2,
        color: "#00c176",
        numero: 100,
        porcentaje: 0,
        identificador: "vai",
      },
      {
        name: "Fresa",
        url: require("@/assets/Sabor3.jpg"),
        precio: "$99.00",
        id: 3,
        color: "#00c176",
        numero: 100,
        porcentaje: 0,
        identificador: "fre",
      },
      {
        name: "Limón",
        url: require("@/assets/Sabor4.jpg"),
        precio: "$125.00",
        id: 4,
        color: "#00c176",
        numero: "100",
        porcentaje: 0,
        identificador: "lim",
      },
      {
        name: "Café",
        url: require("@/assets/Sabor5.jpg"),
        precio: "$199.00",
        id: 5,
        color: "#00c176",
        numero: 100,
        porcentaje: 0,
        identificador: "caf",
      },
      {
        name: "Red",
        url: require("@/assets/Sabor6.jpg"),
        precio: "$252.00",
        id: 6,
        color: "#00c176",
        numero: 100,
        porcentaje: 0,
        identificador: "rdv",
      },
      {
        name: "Coco",
        url: require("@/assets/Sabor7.jpg"),
        precio: "$199.00",
        id: 7,
        color: "#00c176",
        numero: 100,
        porcentaje: 0,
        identificador: "coc",
      },
      {
        name: "Zanahoria",
        url: require("@/assets/Sabor8.jpg"),
        precio: "$199.00",
        id: 8,
        color: "#00c176",
        numero: "100",
        porcentaje: 0,
        identificador: "zan",
      },
    ],
    decorationCake: [
      {
        name: "Frutas",
        url: require("@/assets/Decoracion1.jpg"),
        precio: "$50.00",
        id: 1,
        color: "#00c176",
        numero: "100",
        porcentaje: "0",
        identificador: "fru",
      },
      {
        name: "Fondant",
        url: require("@/assets/Decoracion2.jpg"),
        precio: "$25.00",
        id: 2,
        color: "#00c176",
        numero: "100",
        porcentaje: "0",
        identificador: "fon",
      },
      {
        name: "Chantilly",
        url: require("@/assets/Decoracion3.jpg"),
        precio: "$30.00",
        id: 3,
        color: "#00c176",
        numero: "100",
        porcentaje: "0",
        identificador: "cha",
      },
      {
        name: "Merengue",
        url: require("@/assets/Decoracion4.jpg"),
        precio: "$15.00",
        id: 4,
        color: "#00c176",
        numero: "100",
        porcentaje: "0",
        identificador: "mer",
      },
      {
        name: "Caramelo",
        url: require("@/assets/Decoracion5.jpg"),
        precio: "$55.00",
        id: 5,
        color: "#00c176",
        numero: "100",
        porcentaje: "0",
        identificador: "car",
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
  mutations: {
    /*eslint-disable*/
    LlenarFormulario(
      state,
      { nombre, correo, telefono, detalles }
    ) {
      state.user.push({
        name: nombre,
        phone: telefono,
        email: correo,
        text: detalles,
      });
    },
    reducirSabores(state,{
      cho,
      vai,
      fre,
      lim,
      caf,
      rdv,
      coc,
      zan,
    }) {
      if(cho){
        state.tasteCake[0].porcentaje += 60;              
        state.tasteCake[0].numero = parseInt((100 * (state.tasteCake[0].porcentaje - 440))/ -440);
        if(state.tasteCake[0].porcentaje > 220){
          state.tasteCake[0].color = "#fdf57e";
          if(state.tasteCake[0].porcentaje > 330)  {
            state.tasteCake[0].color = "#b11623";
          }
        }        
      }
      if(vai){
        state.tasteCake[1].porcentaje += 60;
        state.tasteCake[1].numero = parseInt((100 * (state.tasteCake[1].porcentaje - 440))/ -440);
        if(state.tasteCake[1].porcentaje > 220){
          state.tasteCake[1].color = "#fdf57e";
          if(state.tasteCake[1].porcentaje > 330)  {
            state.tasteCake[1].color = "#b11623";
          }
        }
      }
      if(fre){
        state.tasteCake[2].porcentaje += 60;
        state.tasteCake[2].numero = parseInt((100 * (state.tasteCake[2].porcentaje - 440))/ -440);
        if(state.tasteCake[2].porcentaje > 220){
          state.tasteCake[2].color = "#fdf57e";
          if(state.tasteCake[2].porcentaje > 330)  {
            state.tasteCake[2].color = "#b11623";
          }
        }
      }
      if(lim){
        state.tasteCake[3].porcentaje += 60;
        state.tasteCake[3].numero = parseInt((100 * (state.tasteCake[3].porcentaje - 440))/ -440);
        if(state.tasteCake[3].porcentaje > 220){
          state.tasteCake[3].color = "#fdf57e";
          if(state.tasteCake[3].porcentaje > 330)  {
            state.tasteCake[3].color = "#b11623";
          }
        }
      }
      if(caf){
        state.tasteCake[4].porcentaje += 60;
        state.tasteCake[4].numero = parseInt((100 * (state.tasteCake[4].porcentaje - 440))/ -440);
        if(state.tasteCake[4].porcentaje > 220){
          state.tasteCake[4].color = "#fdf57e";
          if(state.tasteCake[4].porcentaje > 330)  {
            state.tasteCake[4].color = "#b11623";
          }
        }
      }
      if(rdv){
        state.tasteCake[5].porcentaje += 60;
        state.tasteCake[5].numero = parseInt((100 * (state.tasteCake[5].porcentaje - 440))/ -440);
        if(state.tasteCake[5].porcentaje > 220){
          state.tasteCake[5].color = "#fdf57e";
          if(state.tasteCake[5].porcentaje > 330)  {
            state.tasteCake[5].color = "#b11623";
          }
        }
      }
      if(coc){
        state.tasteCake[6].porcentaje += 60;
        state.tasteCake[6].numero = parseInt((100 * (state.tasteCake[6].porcentaje - 440))/ -440);
        if(state.tasteCake[6].porcentaje > 220){
          state.tasteCake[6].color = "#fdf57e";
          if(state.tasteCake[6].porcentaje > 330)  {
            state.tasteCake[6].color = "#b11623";
          }
        }
      }
      if(zan){
        state.tasteCake[7].porcentaje += 60;
        state.tasteCake[7].numero = parseInt((100 * (state.tasteCake[7].porcentaje - 440))/ -440);
        if(state.tasteCake[7].porcentaje > 220){
          state.tasteCake[7].color = "#fdf57e";
          if(state.tasteCake[7].porcentaje > 330)  {
            state.tasteCake[7].color = "#b11623";
          }
        }
      }

    },
    reducirDecoraciones(state,{
      fru: fru,
      fon: fon,
      cha: cha,
      mer: mer,
      car: car,
    }) {
      if(fru){
        state.decorationCake[0].porcentaje += 40;
        state.decorationCake[0].numero = parseInt((100 * (state.decorationCake[0].porcentaje - 440))/ -440);
        if(state.decorationCake[0].porcentaje > 220){
          state.decorationCake[0].color = "#fdf57e";
          if(state.decorationCake[0].porcentaje > 330)  {
            state.decorationCake[0].color = "#b11623";
          }
        }
      }
      if(fon){
        state.decorationCake[1].porcentaje += 40;
        state.decorationCake[1].numero = parseInt((100 * (state.decorationCake[1].porcentaje - 440))/ -440);
        if(state.decorationCake[1].porcentaje > 220){          
          state.decorationCake[1].color = "#fdf57e";
          if(state.decorationCake[1].porcentaje > 330)  {
            state.decorationCake[1].color = "#b11623";
          }
        }
      }
      if(cha){
        state.decorationCake[2].porcentaje += 40;
        state.decorationCake[2].numero = parseInt((100 * (state.decorationCake[2].porcentaje - 440))/ -440);
        if(state.decorationCake[2].porcentaje > 220){
          state.decorationCake[2].color = "#fdf57e";
          if(state.decorationCake[2].porcentaje > 330)  {
            state.decorationCake[2].color = "#b11623";
          }
        }
      }
      if(mer){
        state.decorationCake[3].porcentaje += 40;
        state.decorationCake[3].numero = parseInt((100 * (state.decorationCake[3].porcentaje - 440))/ -440);
        if(state.decorationCake[3].porcentaje > 220){
          state.decorationCake[3].color = "#fdf57e";
          if(state.decorationCake[3].porcentaje > 330)  {
            state.decorationCake[3].color = "#b11623";
          }
        }
      }
      if(car){
        state.decorationCake[4].porcentaje += 20;
        state.decorationCake[4].numero = parseInt((100 * (state.decorationCake[4].porcentaje - 440))/ -440);
        if(state.decorationCake[4].porcentaje > 220){
          state.decorationCake[4].color = "#fdf57e";
          if(state.decorationCake[4].porcentaje > 330)  {
            state.decorationCake[4].color = "#b11623";
          }
        }
      }
    },
  },
  actions: {},
  modules: {},
});
