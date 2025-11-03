<template>
  <input type="range" :min="min" :max="max" :step="step" v-model.number="rangeValue" @mousedown="isActive = true" @mouseup="isActive = false" @touchstart="isActive = true" @touchend="isActive = false"
    class="w-full h-2 appearance-none rounded-lg bg-sky-300 accent-sky-600 cursor-pointer
      transition-all duration-300
      hover:bg-sky-400
      focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-1
      [&::-webkit-slider-thumb]:appearance-none
      [&::-webkit-slider-thumb]:w-5
      [&::-webkit-slider-thumb]:h-5
      [&::-webkit-slider-thumb]:rounded-full
      [&::-webkit-slider-thumb]:bg-sky-800
      [&::-webkit-slider-thumb]:transition-all
      [&::-webkit-slider-thumb]:duration-300
      [&::-webkit-slider-thumb]:hover:scale-110
      [&::-webkit-slider-thumb]:hover:shadow-lg
      [&::-webkit-slider-thumb]:hover:shadow-sky-400/40
      [&::-moz-range-thumb]:bg-sky-800
      [&::-moz-range-thumb]:transition-all
      [&::-moz-range-thumb]:duration-300
      [&::-moz-range-thumb]:hover:scale-110
      [&::-moz-range-thumb]:hover:shadow-lg
      [&::-moz-range-thumb]:hover:shadow-sky-400/40"
      :class="isActive ? 'animate-sliderBounce' : ''"
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
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    rangeValue: {
      get() { return this.modelValue },
      set(val) { this.$emit('update:modelValue', Number(val)) }
    }
  }
}
</script>