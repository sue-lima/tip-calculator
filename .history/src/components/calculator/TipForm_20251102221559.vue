<template>
  <div>
    <span>EUR</span>
    <BaseToggle v-model="checked" />
    <span>USD</span>
  </div>
  <div>
    <span>Valor</span>
    <span>00</span>
    <BaseInput :type="'number'" :min="0" v-model="billValue" />
  </div>
  <div>
    <span>Gorjeta</span>
    <span>00</span>
    <div>
      <label for="">10</label>
      <BaseSlider :min="10" :max="20" v-model="tipPercent" />
      <span>20</span>
    </div>
  </div>
  <div>
    <span>Pessoas</span>
    <span>00</span>
    <div>
      <label for="">2</label>
      <BaseSlider :min="2" :max="16" v-model="peopleCount" />
      <span>16</span>
    </div>
  </div>
</template>

<script>
import BaseToggle from '@/components/base/BaseToggle.vue';
import BaseInput from '@/components/base/BaseInput.vue';
import BaseSlider from '@/components/base/BaseSlider.vue';

export default {
  name: 'TipForm',
  components: {
    BaseToggle,
    BaseInput,
    BaseSlider,
  },
}
</script>