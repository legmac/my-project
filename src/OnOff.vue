<template>
  <div>
    <button :class="{'active': value}" @click="onChange(true)" class="on">on</button>
    <!-- enabled -> value -->
    <!-- @click="enabled = ! value" -->
    <button :class="{'active': !value}" @click="onChange(false)" class="off">off</button>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    onChange(newValue) {
      this.$emit("input", newValue);
    }
  }
  // data() {
  //   return {
  //     enabled: true
  //   };
  // }
};
</script>

<style scoped>
button {
  border: none;
  padding: 5px 15px;
  cursor: pointer;
  margin-right: 20px;
  outline: none;
}
button:active {
  box-shadow: inset 1px 1px 2px (0, 0, 0, 0.5);
}
.on.active {
  background: green;
  color: #ffffff;
}
.off.active {
  background: red;
  color: #ffffff;
}
</style>