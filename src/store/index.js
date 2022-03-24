import { createStore } from 'vuex'

export default createStore({
  state: {
    cakeShow: [
      {name:'Pastel chocoflan' , url: require('@/assets/pastel1.jpg'),precio: '$105.00', id:1},
      {name:'Pastel chocolate' , url: require('@/assets/pastel2.jpg'),precio: '$125.00', id:2},
      {name:'Pastel galleta' ,   url: require('@/assets/pastel3.jpg'),precio: '$112.00', id:3},
      {name:'Pastel cereza' ,    url: require('@/assets/pastel4.jpg'),precio: '$215.00', id:4},
      {name:'Pastel naranja' ,   url: require('@/assets/pastel5.jpg'),precio: '$199.00', id:5},
      {name:'Pastel flan' ,      url: require('@/assets/pastel6.jpg'),precio: '$150.00', id:6}
    ],    
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
