<template>
  <div class="list-item rounded bg-blue-light px-5 py-3">
    <div v-if="itemType === 'users'">
      A user item
    </div>
    <div v-else>
      A comment item
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ListItem',
    props: {
      itemType: {
        type: String,
        default: 'user'
      },
      data: {
        type: Object,
        default: () => {
          return {}
        }
      }
    }
  }
</script>
