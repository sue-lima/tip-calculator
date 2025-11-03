<template>
  <input :type="type" :value="value" :min="min" :max="max" v-model="inputValue" 
  class="w-full px-3 py-2 rounded-md border border-sky-400 bg-sky-100
    text-sky-900 placeholder-sky-500
    focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-600
    transition duration-200" />
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    modelValue: { type: [String, Number], default: '' },
    type: { type: String, default: 'text' },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 }
  },
  computed: {
    inputValue: {
      get() { return this.modelValue },
      set(val) { this.$emit('update:modelValue', val) }
    }
  }
}
</script>