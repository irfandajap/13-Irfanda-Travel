<template>
  <v-app-bar
      style="padding: 0px 100px"
      app
      color="#FF9800"
      light
      elevation="6"
      elevate-on-scroll
    >
    <v-toolbar-title>
      <v-img width="100" height="100" src="./../components/logo-removebg-preview.png"></v-img>
    </v-toolbar-title>
    <v-spacer/>
    <v-layout justify-content: center>
    <v-list class="d-flex" color="#FF9800">
      <v-list-item link v-for="(menu,index) in menus" :key="index" :to="menu.route">
     
      <v-list-item-title style="margin-left:40px;margin-right:40px">
        {{menu.title}}
      </v-list-item-title>

      </v-list-item>
    </v-list>
    </v-layout>
    <v-btn dark rounded height="50">
      <h4>
        BOOK TICKET
      </h4>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: "Header-Vue",
    data(){
    return{
      menus:[
        {title:'Home',        route:'home'},
        {title:'About Us',   route:'about-us'},
        {title:'Destination', route:'destination'},
        {title:'Contact',     route:'contact'},
        {title:'Packages',    route:'packages'},
      ]
  }
  }
}
</script>

<style scoped>

</style>