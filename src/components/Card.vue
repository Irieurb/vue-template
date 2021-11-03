<template>
  <div>
    <img class="card-img-top" :src="item.pic" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ item.title }}</h5>
      <p class="card-text">{{ item.detail }}</p>
      <hr>
      <span v-if="item.done" class="badge badge-success">Erledigt</span>
      <span v-else class="badge badge-warning">Offen</span>
      <hr>
      <a href="#" @click="toggleItem(index)" class="card-link">{{  }}</a>
    </div>
  </div>
</template>

<script>
export default {
name: "Card",

  props: {
    item: Object,
    default: {}
  }

}
</script>

<style scoped>

</style>