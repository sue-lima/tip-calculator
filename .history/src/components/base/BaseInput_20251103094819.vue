<template>
  <div class="relative w-full">
    <input :type="type" :min="min" :max="max" :step="step" v-model="internalValue"
      class="w-full px-3 py-2 rounded-md border border-sky-400 bg-sky-100 text-sky-900 placeholder-sky-500 transition-all duration-300 ease-out
      hover:border-sky-500 hover:bg-sky-200 hover:shadow-md hover:shadow-sky-200/60 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-600"/>
    <span class="absolute inset-0 rounded-md border border-transparent pointer-events-none transition-all duration-700 ease-out opacity-0 hover:opacity-100 animate-glowBorder"></span>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    modelValue: { type: [String, Number], default: 0 },
    type: { type: String, default: 'text' },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    step: { type: Number, default: 1 },
  },
  computed: {
    internalValue: {
      get() {
        return this.modelValue
      },
      set(val) {
        const numberVal = this.type === 'number' ? Number(val) : val
        this.$emit('update:modelValue', numberVal)
      }
    }
  }
}
</script>