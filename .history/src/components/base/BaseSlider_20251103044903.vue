<template>
  <input
    type="range"
    :min="min"
    :max="max"
    :step="step"
    v-model.number="rangeValue"
    class="w-full h-2 appearance-none rounded-lg bg-indigo-300 accent-indigo-600
    [&::-webkit-slider-thumb]:bg-indigo-800
    [&::-moz-range-thumb]:bg-indigo-800 cursor-pointer
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
