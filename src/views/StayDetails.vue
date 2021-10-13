<template>
  <div class="details flex">
    <div class="details__img">
      <img :src="stay.photo" alt="property photo" />
    </div>

    <div class="details__info">
      <div class="details__ino--top">
        <div class="details__info--type">{{ stay.type }}</div>
        <h3 class="details__info--title">{{ stay.title }}</h3>
      </div>

      <div class="details__info--mid">
        <div v-if="stay.beds != null">
          Beds {{ stay.beds }}, <span>Max Guests {{ stay.maxGuests }}</span>
        </div>
      </div>

      <div class="details__info--bottom flex">
        <i class="star"></i>
        <div>{{ stay.rating }}</div>
        <div class="details__info--superhost" v-if="stay.superHost">
          Super Host
        </div>
      </div>
    </div>
    <router-link to="/" class="back"> Back</router-link>
  </div>
</template>

<script>
import StayService from "@/services/StayService.js";
export default {
  props: ["id"],
  data() {
    return {
      stay: {},
    };
  },
  created() {
    StayService.getStay(this.id)
      .then((response) => {
        this.stay = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
// vars
$redish: #eb5756;
$lGrey: #828282;
$mGrey: #4f4f4f;
$dGrey: #333333;

// class
.back {
  color: $redish;
  font-size: 12px;
  position: absolute;
  bottom: -20px;
  left: 20px;
  transition: all 0.2s linear;
  width: 100%;
  &:hover,
  &:focus {
    color: $mGrey;
    left: 10px;
    &::before {
      border-right: 7px solid transparent;
      transition: all 0.2s linear;
    }
  }
  &:before {
    width: 0;
    height: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-right: 7px solid $redish;
    content: "";
    position: absolute;
    left: -10px;
    bottom: 3px;
    transition: all 0.2s linear;
  }
  @media only screen and (max-width: 1200px) {
    margin-left: 30px;
  }

  @media only screen and (max-width: 768px) {
    top: -20px;
    right: 40px;
    left: auto;
    bottom: auto;
    width: auto;
    margin-left: 0;
  }
}

//content
.details {
  padding: 1%;
  position: relative;
  &__info {
    flex-grow: 1;
  }
  &__img {
    flex-basis: 30%;
    margin-right: 20px;
    img {
      width: 100%;
    }
  }

  h3 {
    margin-top: 5px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid $lGrey;
    color: $dGrey;
  }

  &__info {
    position: relative;
    &--top {
      color: $mGrey;
    }
    &--type,
    &--mid {
      font-size: 14px;
      margin-right: 12px;
      color: $lGrey;
    }
    &--bottom {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      align-items: center;
      .star {
        top: 0;
      }
    }
    &--superhost {
      margin-left: auto;
      border: 1px solid;
      padding: 9px 7px;
      color: $redish;
      position: relative;
      top: -3px;
    }
  }
  @media only screen and (max-width: 1200px) {
    padding: 20px 40px;
  }

  @media only screen and (max-width: 768px){
    flex-direction: column;
    margin: 0 auto;
    &__img {
      margin-right: 0;
    }
    &__info {
      margin-top: 20px;
      &--bottom {
        position: unset;
      }
      &--mid {
        margin-bottom: 40px;
      }
    }
  }
}
</style>
