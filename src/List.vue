<template>
  <div>
    <h1>List</h1>

    <input type="text" v-model="searchName" />

    <ul>
      <li v-for="pers of filteredNames">{{pers}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      named: ["vlad", "max", "elena", "john"],
      searchName: ""
    };
  },
  computed: {
    filteredNames() {
      return this.named.filter(name => {
        // return name.indexOf(this.searchName) !== -1
        return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1;
      });
    }
  }
};
</script>