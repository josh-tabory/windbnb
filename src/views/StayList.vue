<template>
  <div class="stays flex">
    <StayCard v-for="stay in stays" :key="stay.id" :stay="stay" />
  </div>
</template>

<script>
import StayCard from "@/components/StayCard.vue";
import StayService from "@/services/StayService.js";

export default {
  name: "StayList",
  components: {
    StayCard,
  },
  data() {
    return {
      stays: null,
    };
  },
  created() {
    StayService.getStays()
      .then((response) => {
        this.stays = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>


</style>
