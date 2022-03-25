<template>
  <table class="redTable">
    <thead>
      <tr>
        <th>Dirección</th>
        <th>Teléfono</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="Alcaldia == 'Iztapalapa'">
        <tr v-for="tabla in $store.state.Iztapalapa" :key="tabla.id">
          <td>
            {{ tabla.dire }}
          </td>
          <td>
            {{ tabla.tel }}
          </td>
        </tr>
      </template>
      <template v-if="Alcaldia == 'Cuauhtemoc'">
        <tr v-for="tabla in $store.state.Cuauhtemoc" :key="tabla.id">
          <td>
            {{ tabla.dire }}
          </td>
          <td>
            {{ tabla.tel }}
          </td>
        </tr>
      </template>
      <template v-if="Alcaldia == 'Gustavo'">
        <tr v-for="tabla in $store.state.Gustavo" :key="tabla.id">
          <td>
            {{ tabla.dire }}
          </td>
          <td>
            {{ tabla.tel }}
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>
<script>
export default {
  props:{
    Alcaldia: String
  }
}
</script>
<style scoped>
table.redTable {
  border: 2px solid #0b08a4b9;
  background-color: #EEE7DB;
  width: 70%;  
  border-collapse: collapse;
}
table.redTable td, table.redTable th {
  border: 1px solid #AAAAAA;
  padding: 3px 2px;
}
table.redTable tr:nth-child(even) {
  background: #F5C8BF;
}
table.redTable thead {
  background: #0b08a4b9;
}
table.redTable thead th {  
  font-weight: bold;
  color: #FFFFFF;
  text-align: center;
  border-left: 1px solid #0b08a4b9;
}
table.redTable thead th:first-child {
  border-left: none;
}
</style>