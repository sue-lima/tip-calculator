<template>
  <input type="range" :value="value" :min="min" :max="max" @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  name: 'BaseSlider',
  props: ['value', 'min', 'max'],
}
</script>