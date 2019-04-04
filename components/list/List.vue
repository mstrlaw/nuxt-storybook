<template>
  <div class="list p-5 rounded">
    I'm a {{ source }} list
  </div>
</template>

<script>
  export default {
    name: 'List',
    props: {
      source: {
        type: String,
        default: 'users'
      }
    },
    data() {
      return {
        entities: []
      }
    },
    mounted() {
      switch (this.source) {
        default:
        case 'users':
          this.loadUsers()
          break

        case 'comments':
          this.loadUsers()
          break
      }
    },
    methods: {
      loadUsers() {
        //  Will call store action
        console.log('load users')
      },
      loadComments() {
        //  Will call store action
        console.log('load comments')
      },
    }
  }
</script>

<style lang="scss" scoped>
  $background: #EFF8FF;

  .list {
    background: $background;
  }
</style>
