export default{
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
      },
      created() {
          console.log('wtf', 'created')
      },
}