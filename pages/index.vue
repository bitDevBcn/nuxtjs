<script setup>
  const counter = useCounter()
  const { data } = await useFetch('/api/hello')
</script>

<template>

</template>

