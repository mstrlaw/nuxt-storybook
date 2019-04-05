<template>
  <div class="list w-full rounded p-2 mx-3">
    <ListItem
      v-for="entity in entities"
      :key="entity.id"
      :item-type="source"
      :data="entity"
    />
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
          this.loadComments()
          break
      }
    },
    methods: {
      loadUsers() {
        this.$store.dispatch('GET_USERS')
        .then(res => {
          this.entities = res
        })
        .catch(err => {
          console.log('API error')
          console.log(err)
        })
      },
      loadComments() {
        this.$store.dispatch('GET_COMMENTS')
        .then(res => {
          this.entities = res
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
    max-height: 550px;
    overflow: auto;
  }
</style>
