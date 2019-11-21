<template>
  <div class="box">
    <article class="media">
      <figure class="media-left">
        <p class="image">
          <img :src="event.eventThumb" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h2 class="is-size-5">{{ event.title | nohtml }}</h2>
          <p class="event-time">
            <time datetime="event.startDateTime">
              {{ event.startDateTime | prettydate }}
            </time>
          </p>
          <p>
            {{ event.description | nohtml }}
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <div class="level-item">
              <span class="icon is-small">
                <i class="fas fa-map-marked-alt"></i>
              </span>
              <address
                class="is-size-7"
                v-html="event.location.replace(/<br \/>/g, ', ')"
              ></address>
            </div>
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },

  props: ['event']
};
</script>

<style>
.box {
}
.media {
  /* overflow: hidden; */
  margin-left: 30px;
  max-height: 40vh !important;
}

figure {
  max-width: 30% !important;
  overflow: hidden;
}

h2 {
  margin-bottom: 0 !important;
}

.event-time {
  margin-top: 0;
}

address {
  padding-left: 5px;
}
</style>
