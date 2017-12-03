<template>
  <div>
    <mt-buttom @click="test" type = "danger" size = "large">点我测试</mt-buttom>
    {{lunbo}}
  </div>
</template>
<script>
export default {
  methods: {
    test() {
      this.$axios.get("getlunbo")
      .then(res => {
        this.lunbo = res.data.message;
      });
    }
  },
  data() {
    return {
      lunbo: []
    };
  }
};
</script>
<style scoped>

</style>
