<template>
  <input
    type="range"
    :min="min"
    :max="max"
    :step="step"
    v-model.number="rangeValue"
    class="w-full h-2 appearance-none rounded-lg bg-indigo-300 accent-indigo-600
           [&::-webkit-slider-thumb]:appearance-none
           [&::-webkit-slider-thumb]:h-4
           [&::-webkit-slider-thumb]:w-4
           [&::-webkit-slider-thumb]:rounded-full
           [&::-webkit-slider-thumb]:bg-indigo-800
           [&::-webkit-slider-thumb]:cursor-pointer
           [&::-moz-range-thumb]:h-4
           [&::-moz-range-thumb]:w-4
           [&::-moz-range-thumb]:rounded-full
           [&::-moz-range-thumb]:bg-indigo-800
           [&::-moz-range-thumb]:cursor-pointer
           focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1"
  />
</template>

<script>
export default {
  name: 'BaseSlider',
  props: {
    modelValue: { type: Number, required: true },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    step: { type: Number, default: 1 }
  },
  computed: {
    rangeValue: {
      get() { return this.modelValue },
      set(val) { this.$emit('update:modelValue', Number(val)) }
    }
  }
}
</script>
