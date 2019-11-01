<template>
  <div class="card">
    <span class="top-symbol" :class="suit">{{ name }}</span>
    <span class="bottom-symbol" :class="suit">{{ name }}</span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  props: ["name", "value", "suit"]
};
</script>

<style>
.card {
  position: relative;
  display: inline-block;
  margin: 0 auto;
  border: solid 1px black;
  box-shadow: 2px 2px 2px gray;
  border-radius: 5px;
  width: 4.5em;
  height: 6.5em;
  background-color: white;
  font-size: 1.5em;
}

span {
  position: absolute;
}

.top-symbol {
  top: 5px;
  left: 5px;
}

.bottom-symbol {
  bottom: 5px;
  right: 5px;
}
.spades::after {
  content: "\2660";
}
.spades,
.clubs {
  color: black;
}
.hearts,
.diamonds {
  color: red;
}
.hearts::after {
  content: "\2665";
}

.diamonds::after {
  content: "\2666";
}

.clubs::after {
  content: "\2663";
}

.spades::after {
  content: "\2660";
}
</style>