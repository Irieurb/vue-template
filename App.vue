<template>
    <div id="app">
        <v-app id="inspire" dark>
            <Navbar></Navbar>
            <v-content>
                <v-container fluid fill-height>
                    <v-layout justify-center align-center>
                        <router-view></router-view>
                    </v-layout>
                </v-container>
            </v-content>
            <v-footer app fixed>
                <span>&copy; 2018</span>
            </v-footer>
        </v-app>
    </div>
</template>
<script>
import Navbar from "../components/layout/Navbar";

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>
