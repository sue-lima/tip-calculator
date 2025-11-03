<template>
    <input :type="type" :value="value" :min="min" :max="max" @input="$emit('input', $event.target.value)"/>
</template>

<script>
export default {
    name: 'BaseInput',
    props: ['type', 'value', 'min', 'max',]
}
</script>