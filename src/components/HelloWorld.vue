<template>
  <div class="hello">
    <h1 class="selected">{{ msg }}</h1>
    <h3  class="selected">Installed CLI Plugins</h3>
    <h3 class="selected">Stagger</h3>
    <div class="box" ref="box"></div>
    <h1>{{now}}</h1>
  </div>
</template>

<script>
import { TimelineLite, Back, gsap } from "gsap";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data(){
    return {
      stags: [],
      mouse: {
        x: 0,
        y: 0
      }
    }
  },
  computed: {
    now(){
      return Date.now()
    }
  },
  methods:{
    // scroll(e){
    //   e = this.$el.body.innerHeight;
    // },
    stagger(){
      var targets = gsap.utils.toArray('.selected');

      return gsap.to(targets, {duration: 1, x: 1, scale: 1, stagger: 0.2, ease: Back})
    }
  },
  mounted() {
    this.scroll();
 var targets = gsap.utils.toArray('.selected');

      const { box } = this.$refs;
    const timeline = new TimelineLite();
    timeline.to(box, 1, {
      x: 200,
      rotation: 90,
      ease: Back.easeInOut // Specify an ease
    });
    timeline.to(
      box,
      0.5,
      {
        background: "green"
      },
      "-=0.5" // Run the animation 0.5s early
    );

    gsap.to(targets, {duration: 1, x: 1, scale: 1, stagger: 0.2, ease: Back})   

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  height: 200px;
  width: 200px;
  background-color: #2c3e50;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
