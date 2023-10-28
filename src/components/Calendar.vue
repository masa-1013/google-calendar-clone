<script setup lang="ts">
  import dayjs from 'dayjs'

  // 直近の日曜日から土曜日までの日付を取得する
  const getLastSundayThroughSaturdayDate = (targetDay: dayjs.Dayjs) => {
    const today = targetDay
    const lastSunday = today.subtract(today.day(), 'day')
    const days = Array.from({ length: 7 }, (_, i) => i)
    return days.map((day) => lastSunday.add(day, 'day').date())
  }

  const days: number[] = getLastSundayThroughSaturdayDate(dayjs())
  const hours = Array.from({ length: 24 }, (_, i) => i)
</script>
<template>
  <div class="w-full grid grid-cols-custom">
    <dvi class="row-span-1 col-span-1"></dvi>
    <div class="row-span-1 col-span-1">
      <DateDisplay :days="days" />
    </div>
    <div class="row-span-1 col-span-1">
      <TimeDisplay :hours="hours" />
    </div>
    <div class="row-span-1 col-span-1">
      <CalendarField :hours="hours" :days="days" />
    </div>
  </div>
</template>
