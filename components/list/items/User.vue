<template>
  <div>
    <b class="text-lg">{{ name }} - "{{ username }}"</b>
    <div class="flex flex-wrap justify-start my-2">
      <div class="w-1/2 mb-2">
        <span class="text-grey-dark font-bold">Email</span>
        <p class="p-0 m-0">{{ email }}</p>
      </div>
      <div class="w-1/2 mb-2">
        <span class="text-grey-dark font-bold">Phone</span>
        <p class="p-0 m-0">{{ phone }}</p>
      </div>
      <div class="w-1/2 mb-2">
        <span class="text-grey-dark font-bold">City</span>
        <p class="p-0 m-0">{{ address.city }}</p>
      </div>
      <div class="w-1/2 mb-2">
        <span class="text-grey-dark font-bold">Company</span>
        <p class="p-0 m-0">{{ company.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'User',
    props: {
      name: {
        type: String,
        default: ''
      },
      username: {
        type: String,
        default: ''
      },
      email: {
        type: String,
        default: ''
      },
      phone: {
        type: String,
        default: ''
      },
      address: {
        type: Object,
        default: () => {
          return {}
        }
      },
      company: {
        type: Object,
        default: () => {
          return {}
        }
      }
    }
  }
</script>
