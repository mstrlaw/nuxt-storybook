<template>
  <div class="list w-full rounded p-1 mx-3">
    <ListItem :item-type="source"/>
  </div>
</template>

<script>
  import ListItem from '@/components/list/items/ListItem'

  export default {
    name: 'List',
    components: {
      ListItem
    },
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
        this.$store.dispatch('GET_USERS')
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log('API error')
          console.log(err)
        })
      },
      loadComments() {
        this.$store.dispatch('GET_COMMENTS')
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log('API error')
          console.log(err)
        })
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
