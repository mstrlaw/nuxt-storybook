<template>
  <div>
    <b>{{ name }}</b>
    <p>{{ body }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Comment',
    props: {
      name: {
        type: String,
        default: ''
      },
      body: {
        type: String,
        default: ''
      }
    }
  }
</script>
