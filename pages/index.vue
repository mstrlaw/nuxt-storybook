<template>
  <section class="container">
    <div class="text-center">
      <h1 class="title">
        nuxt-storybook
      </h1>
      <h2 class="subtitle">
        Example of using Nuxt + Storybook
      </h2>
    </div>
    <div class="flex justify-between w-full">
      <List />
      <List :source="'comments'"/>
    </div>
  </section>
</template>

<script>
import List from '@/components/list/List'

export default {
  components: {
    List
  }
}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 3em;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 1.5em;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
