<template>
  <input :type="type" :value="value" :min="min" :max="max" v-model="inputValue" 
  class="w-full px-3 py-2 rounded-md border border-indigo-400 bg-indigo-100
           text-indigo-900 placeholder-indigo-500
           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-600
           transition duration-200" />
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