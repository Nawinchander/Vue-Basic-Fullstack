<template>
  <div>
    <h3>User List</h3>
    <ul>
      <li v-for="user in users" :key="user._id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['users']
}
</script>

