<template>
  <input type="range" :min="min" :max="max" :step="step" v-model.number="rangeValue">
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