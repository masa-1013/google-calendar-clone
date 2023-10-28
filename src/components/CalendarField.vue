<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      hours: number[]
      days: number[]
    }>(),
    {
      hours: () => [],
      days: () => []
    }
  )
</script>
<template>
  <v-container>
    <template v-for="_hour in props.hours" :key="_hour">
      <v-row class="h-16">
        <template v-for="_day in props.days" :key="_day">
          <v-col class="border boder-indigo-600"> </v-col>
        </template>
      </v-row>
    </template>
  </v-container>
</template>
