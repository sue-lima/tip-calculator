<template>
  <div class="relative w-14 h-7 rounded-full cursor-pointer bg-sky-400 transition-colors duration-300 hover:bg-sky-500" @click="updateValue">
    <span class="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-sky-800 transition-transform duration-300 ease-out hover:shadow-lg hover:shadow-sky-300/40"
      :class="[ checked ? 'translate-x-7' : 'translate-x-0','animate-toggleBounce']"></span>
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