<template>
  <router-link :to="{ name: 'StayDetails', params: { id: stay.id } }">
    <div class="stayCard flex">
      <div class="stayCard__image">
        <img :src="stay.photo" alt="property photo" />
      </div>

      <div class="stayCard__meta flex">
        <div class="stayCard__meta--host" v-if="stay.superHost">Super Host</div>
        <div class="stayCard__meta--type">{{ stay.type }}</div>
        <div class="stayCard__meta--beds" v-if="stay.beds != null">
          Beds {{ stay.beds }}
        </div>
        <div class="stayCard__meta--rating">
          <i class="star"></i>
          {{ stay.rating }}
        </div>
      </div>

      <h3>{{ stay.title }}</h3>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    stay: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss"></style>
