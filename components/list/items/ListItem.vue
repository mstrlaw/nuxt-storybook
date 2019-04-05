<template>
  <div class="list-item rounded bg-indigo-lightest shadow px-5 py-3 mb-3">
    <div v-if="itemType === 'users'">
      <User
        :name="data.name"
        :username="data.username"
        :email="data.email"
        :phone="data.phone"
        :address="data.address"
        :company="data.company"
      />
    </div>
    <div v-else>
      <Comment
        :name="data.name"
        :body="data.body"
      />
    </div>
  </div>
</template>

<script>
  import User from '@/components/list/items/User'
  import Comment from '@/components/list/items/Comment'

  export default {
    name: 'ListItem',
    components: {
      User,
      Comment
    },
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
