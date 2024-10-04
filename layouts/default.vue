<template>
  <div>
    <BaseHeader/>
    <slot/>
    <BaseFooter/>
  </div>
</template>
<script setup lang="ts">
import BaseHeader from "~/components/base/BaseHeader.vue";
import BaseFooter from "~/components/base/BaseFooter.vue";
</script>