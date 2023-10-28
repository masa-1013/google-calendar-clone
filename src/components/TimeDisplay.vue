<script setup lang="ts">
  const props = defineProps<{
    hours: number[]
  }>()

  const change24HourToAmPm = (hour: number) => {
    if (hour < 12) {
      return `午前${hour}時`
    }
    // 12時は午後12時と表示する
    if (hour === 12) {
      return `午後${hour}時`
    }

    return `午後${hour - 12}時`
  }
</script>
<template>
  <div class="w-24"></div>
  <template v-for="hour in props.hours" :key="hour">
    <div class="h-16 text-xs text-right">
      {{ change24HourToAmPm(hour) }}
    </div>
  </template>
</template>
