<template>
  <input :type="type" :value="value" :min="min" :max="max" v-model="inputValue" />
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    modelValue: { type: [String, Number], default: '' },
    type: { type: String, default: 'text' },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 }/*,
    step: { type: Number, default: 1 }*/
  },
  computed: {
    inputValue: {
      get() { return this.modelValue },
      set(val) { this.$emit('update:modelValue', val) }
    }
  }
}
</script>