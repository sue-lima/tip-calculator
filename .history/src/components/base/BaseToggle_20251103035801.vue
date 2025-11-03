<template>
  <div
    class="relative w-14 h-7 rounded-full cursor-pointer transition-colors duration-300" :class="checked ? 'bg-sky-600' : 'bg-sky-950'" @click="updateValue"
  >
    <span
      class="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-sky-950 transition-all duration-300" :class="checked ? 'translate-x-7' : 'translate-x-0'"
    ></span>
  </div>
</template>

<script>
export default {
  name: 'BaseToggle',
  props: {
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    checked: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit('update:modelValue', val)
      }
    }
  },
  methods: {
    updateValue() {
      this.checked = !this.checked
    }
  }
}
</script>