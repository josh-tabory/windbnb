<template>
  <div id="app" class="wrap">
    <h1>
      <router-link to="/">
        <img src="./assets/logo.svg" alt="Windbnb Logo" />
      </router-link>
    </h1>
    <router-view />
  </div>
</template>

<style lang="scss">
// google fonts
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap");
// vars
$redish: #eb5756;
$lGrey: #828282;
$mGrey: #4f4f4f;
$dGrey: #333333;

// elelments
* {
  box-sizing: border-box;
  margin: 0;
  padding: auto;
}
body {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  overflow-x: hidden;
}
h1 {
  padding: 1%;
  @media only screen and (max-width: 1200px) {
    padding: 0 calc(1% + 25px);
  }
}
a {
  text-decoration: none;
}

// classes
.wrap {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.flex {
  display: flex;
}
.star {
  position: relative;
  top: 3px;

  display: inline-block;
  width: 0;
  height: 0;

  margin-left: 0.9em;
  margin-right: 0.9em;
  margin-bottom: 1.2em;

  border-right: 0.3em solid transparent;
  border-bottom: 0.7em solid $redish;
  border-left: 0.3em solid transparent;

  /* Controlls the size of the stars. */
  font-size: 10px;

  &:before,
  &:after {
    content: "";

    display: block;
    width: 0;
    height: 0;

    position: absolute;
    top: 0.59em;
    left: -1em;

    border-right: 1em solid transparent;
    border-bottom: 0.7em solid $redish;
    border-left: 1em solid transparent;

    transform: rotate(-35deg);
  }

  &:after {
    transform: rotate(35deg);
  }
}

// main
.stays {
  flex-wrap: wrap;
  justify-content: space-between;
  @media only screen and (max-width: 1200px) {
    padding: 0 20px;
  }

  & > a {
    width: 31%;
    justify-content: space-between;
    margin: 1%;
    &:hover,
    &:focus {
      h3,
      .stayCard__meta--host {
        color: $redish;
      }
    }
  }
  @media only screen and (max-width: 1200px) {
    & > a {
      width: 46%;
      margin: 2%;
    }
  }
  @media only screen and (max-width: 768px) {
    & > a {
      width: 96%;
      flex-direction: column;
    }
  }
}

.stayCard {
  flex-direction: column;
  &__image {
    max-height: 245.16px;
    max-height: 245.16px;
    overflow: hidden;
    flex-basis: 100%;
    border-radius: 24px;
    img {
      width: 100%;
    }
  }
  &__meta {
    justify-content: flex-start;
    align-items: center;
    color: $lGrey;
    margin-top: 20px;
    margin-bottom: 12px;
    &--host {
      color: $mGrey;
      border: 1px solid;
      border-radius: 12px;
      padding: 7px 10px;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      margin-right: 11px;
      transition: all 0.2s linear;
      margin-bottom: -7px;
      margin-top: -10px;
    }
    &--type,
    &--beds {
      font-size: 14px;
      margin-right: 12px;
    }
    &--rating {
      margin-left: auto;
      font-size: 14px;
      color: $mGrey;
      position: relative;
      &:before {
        position: absolute;
      }
    }
  }
  h3 {
    color: $dGrey;
    transition: all 0.2s linear;
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 50px;
  }
  @media only screen and (max-width: 768px) {
    &__image {
      border-radius: 0;
    }
    h3 {
      margin-bottom: 20px;
    }
  }
  @media only screen and (max-width: 349px) {
    &__meta--host {
      text-align: center;
    }
  }
}
</style>
