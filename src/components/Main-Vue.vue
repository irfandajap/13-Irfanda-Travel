<template>
  <v-container>

      <v-row>
        <v-layout justify-center>
          <v-col lg="6" style="margin-top:200px">
            <h1 class="intro-text" style="font-size:50px">Welcome To Our Page {{ this.title }}</h1>
            <br /> <br /> <br/>
            <p class="description" style="font-size:20px">{{ this.deskripsi }}</p>
            <div style="margin-top:100px">
            <v-btn width="200" height="50" color="#FF9800"><span style="margin-right:40px;opacity:0.7">Destination</span><v-icon>mdi-magnify</v-icon></v-btn>
            <v-btn width="200" height="50" color="#FF9800" style="margin-left:20px"><span style="margin-right:40px;opacity:0.7">Any Month</span><v-icon>mdi-archive-outline</v-icon></v-btn>
            <v-btn width="200" height="50" color="#FF9800" style="margin-left:20px"><span style="margin-right:40px;opacity:0.7">Sort By Date</span><v-icon>mdi-sort</v-icon></v-btn>
            <v-btn width="150" height="50" style="margin-left:20px" rounded dark><span>Search</span></v-btn>
            </div>
            </v-col>
            <v-col lg="5"> 
              <img width="115%" src="./../components/pesawat.png" alt="">
          </v-col>
        </v-layout>
        </v-row>
      
      <v-row>
        <v-layout justify-center>
          <v-col lg="4">
            <v-card
              :loading="loading"
              class="mx-auto my-12"
              max-width="374"
            >
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                height="250"
                src="./../components/vue 1.jpg"
              ></v-img>

              <v-card-title>Melbourne</v-card-title>

              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ms-4">
                    4.5 (413)
                  </div>
                </v-row>

                <div class="my-4 text-subtitle-1">
                  $ • Mexico, Dessert
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  color="deep-purple lighten-2"
                  text
                  @click="Visit"
                >
                  Visit
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col lg="3">
                      <v-card
              :loading="loading"
              class="mx-auto my-12"
              max-width="374"
            >
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                height="250"
                src="./../components/vue 3.jpg"
              ></v-img>

              <v-card-title>Raja Ampat</v-card-title>

              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ms-4">
                    4.5 (413)
                  </div>
                </v-row>

                <div class="my-4 text-subtitle-1">
                  $ • Raja Ampat,Indonesia
                </div>

              </v-card-text>
              <v-card-actions>
                <v-btn
                  color="deep-purple lighten-2"
                  text
                  @click="Visit"
                >
                  Visit
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col lg="4">
                      <v-card
              :loading="loading"
              class="mx-auto my-12"
              max-width="374"
            >
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                height="250"
                src="./../components/vue 2.jpg"
              ></v-img>

              <v-card-title>Danau Toba</v-card-title>

              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ms-4">
                    4.5 (413)
                  </div>
                </v-row>

                <div class="my-4 text-subtitle-1">
                  $ • Sumatera Utara,Indonesia
                </div>

              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="deep-purple lighten-2"
                  text
                  @click="Visit"
                >
                  Visit
                </v-btn>
              </v-card-actions>
            </v-card>
           </v-col>
        </v-layout>
        </v-row>

        <v-row>
          <v-col lg="11" style="margin-left:100px;margin-top:140px">
          <div style="font-size:30px"><b>About Us</b></div><br/>
          <p class="description" style="font-size:20px">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>  
          </v-col>
        </v-row>

      
        <v-row>
          <v-col lg="4" style="margin-left:100px">
            <h1 class="intro-text" style="font-size:30px">Subscribe</h1><br/>
            <p class="description" style="font-size:20px">Enter your email address to subscribe to this blog and receive notifcations of new post by email</p><br/>
            <v-row>
            <v-col lg="8">
              <v-text-field
                label="Enter Your Email"
                outlined
              ></v-text-field>
            </v-col>
            <v-col>
              <v-btn
              height="55" 
              elevation="0" 
              dark
              >Subscribe</v-btn>
            </v-col>
          </v-row>

            </v-col>
            <v-col lg="1"> 
              <div style="margin-left:80px;margin-top:38px">
                <img width="150%" src="./../components/fb.png">
              </div>
              <div style="margin-left:88px">
                <img width="145%" src="./../components/ig.png">
              </div>
              <div style="margin-left:80px">
                <img width="150%" src="./../components/tw.png">
              </div>
            </v-col>
            <v-col>
              <div style="margin-top:55px">@TravelApp</div>
              <div style="margin-top:45px">@TravelApp</div>
              <div style="margin-top:45px">@TravelApp</div>
            </v-col>
          </v-row><br/>
          <div style="margin-left:100px;margin-top:120px;font-size:30px">
            <b>Buat Kiriman Baru</b>

          </div>
          <div style="margin-top:30px">
          <div style="margin-left:100px;font-size:20px">Judul :</div>
          <input type="text" required ref="title"
          style="width: 50%;
          padding: 12px 20px;
          margin-left: 100px;
          margin-top: 30px;
          display: inline-block;
          border: 1px solid #2a393f;
          border-radius: 4px;
          box-sizing: border-box;"/>

          </div><br/>

          <div>
          <div style="margin-left:100px;font-size:20px">Deskripsi :</div>
          <input type="text" required ref="deskripsi"
          style="width: 50%;
          padding: 12px 20px;
          margin-left: 100px;
          margin-top: 30px;
          display: inline-block;
          border: 1px solid #2a393f;
          border-radius: 4px;
          box-sizing: border-box;"/>
          </div>
          
          <button 
          v-on:click="onSubmit"
          style="background-color: black;
          border: none;
          color: white;
          padding: 12px 20px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin-left:100px;
          margin-top:50px"
          >Submit</button>           
      </v-container>
</template>

<script>
export default {
    name: "Main-Vue",
    data: function() {
      return { 
        title: "Travel App",
        deskripsi : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      };
    },
    methods: {
      onSubmit(){
        if (this.$refs.title.value !== "" && this.$refs.deskripsi.value !== ""){
          console.log(this.$refs.title.value);
          this.title = this.$refs.title.value;
          this.deskripsi = this.$refs.deskripsi.value;
          this.$refs.title.value = "";
          this.$refs.deskripsi.value = "";
        }
      },
    },
};
</script>

<style scoped>

</style>