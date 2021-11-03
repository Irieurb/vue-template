<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>
    </v-app-bar>
    <v-main>
        <h1 class="text-center ma-6">Todo Liste</h1>
        <div class="row justify-center">
          <div v-for="(item, index) in todo" class="card col-3 ma-10" style="width: 250px;">
            <img class="card-img-top" :src="item.pic" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.detail }}</p>
              <hr>
              <span v-if="item.done" class="badge badge-success">Erledigt</span>
              <span v-else class="badge badge-warning">Offen</span>
              <hr>
              <a v-if="item.done" href="#" @click="toggleItem(index)" class="card-link">Neu Öffnen</a>
              <a v-else href="#" @click="toggleItem(index)" class="card-link">Erledigt</a>
            </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>

export default {

  name: 'App',

  data: () => ({
    //
    todo: [
      {
        id: 1,
        done: false,
        title: "Titel",
        detail: "Hier steht ein Detailtext",
        pic: "https://picsum.photos/250/100"
      },
      {
        id: 1,
        done: false,
        title: "Titel",
        detail: "Hier steht ein Detailtext",
        pic: "https://picsum.photos/250/100"
      },
      {
        id: 1,
        done: true,
        title: "Titel",
        detail: "Hier steht ein Detailtext",
        pic: "https://picsum.photos/250/100"
      },
      {
        id: 1,
        done: false,
        title: "Titel",
        detail: "Hier steht ein Detailtext",
        pic: "https://picsum.photos/250/100"
      },
      {
        id: 1,
        done: true,
        title: "Titel",
        detail: "Hier steht ein Detailtext",
        pic: "https://picsum.photos/250/100"
      },
      {
        id: 1,
        done: false,
        title: "Titel",
        detail: "Hier steht ein Detailtext",
        pic: "https://picsum.photos/250/100"
      }
    ]
  }),

  methods: {

    toggleItem: function (index) {

      this.todo[index].done = !this.todo[index].done

    }
  }

};
</script>
