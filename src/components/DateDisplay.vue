<script setup lang="ts">
  const props = defineProps<{
    days: number[]
  }>()
</script>
<template>
  <v-container>
    <v-row>
      <template v-for="day in props.days" :key="day">
        <v-col class="text-center">{{ day }}</v-col>
      </template>
    </v-row>
  </v-container>
</template>
