<script setup>
  const counter = useCounter()
  const { data } = await useFetch('/api/hello')
</script>

<template>
  <div>
    <pre>{{ data.hello }}</pre>
  </div>
  <div>
    <div id="main">
    Counter: {{ counter }}
    <button @click="counter++">
      +
    </button>
    <button @click="counter--">
      -
    </button>
  </div>
  <Counter id="counter" />
  </div>
</template>

