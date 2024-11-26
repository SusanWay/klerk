<script setup lang="ts">
import type { Subscription } from '~/types'

interface Props {
  subscriptions: Subscription[]
}

defineProps<Props>()
</script>

<template>
  <SubscriptionWrapper>
    <SubscriptionItem
      v-for="(item, index) in subscriptions"
      :key="index"
      v-bind="item"
    />
  </SubscriptionWrapper>
</template>

<style scoped>

</style>
