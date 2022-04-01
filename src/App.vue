<template>
  <v-app
  style="background:#FFF8DC">
    <header-vue/>
    <v-main>
      <main-vue/>
    </v-main>
    <v-footer style="margin-top:150px">
      <footer-vue/>
    </v-footer>
    
  </v-app>
</template>

<script>
import FooterVue from './components/Footer-Vue.vue';
import HeaderVue from './components/Header-Vue.vue';
import MainVue from './components/Main-Vue.vue';

export default {
  components: { HeaderVue, MainVue, FooterVue },
  name: 'App',

  data(){
    return{
      menus:[
        {title:'Home',        route:'home'},
        {title:'About Us',    route:'about-us'},
        {title:'Destination', route:'destination'},
        {title:'Contact',     route:'contact'},
        {title:'Packages',    route:'packages'},
      ]
  }
  }
};
</script>
