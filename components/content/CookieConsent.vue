<template>
  <div>
    <!-- Cookie Banner -->
    <div v-if="!hasConsent" class="cookie-banner">
      <div class="cookie-content">
        <h3>Cookie Samtykke</h3>
        <p>Vi bruger cookies til at forbedre din oplevelse og analysere trafik via Google Analytics. Ved at klikke "Accepter" godkender du vores brug af cookies.</p>
        <div class="cookie-buttons">
          <button @click="acceptCookies" class="accept">Accepter</button>
          <button @click="declineCookies" class="decline">Afvis</button>
        </div>
      </div>
    </div>

    <!-- Revoke Button (shown when consent is given) -->
    <button v-if="hasConsent" @click="removeConsent" class="revoke-button">
      Tilbagekald cookie samtykke
    </button>
  </div>
</template>

<script setup>
const { gtag } = useGtag()

const hasConsent = ref(false)

onMounted(() => {
  // Check if consent was previously given
  const consent = localStorage.getItem('cookie-consent')
  hasConsent.value = consent === 'accepted'

  // If previously accepted, grant consent immediately
  if (hasConsent.value) {
    grantAnalyticsConsent()
  }
})

const acceptCookies = () => {
  localStorage.setItem('cookie-consent', 'accepted')
  hasConsent.value = true
  grantAnalyticsConsent()
}

const declineCookies = () => {
  localStorage.setItem('cookie-consent', 'declined')
  hasConsent.value = false
}

const removeConsent = () => {
  localStorage.removeItem('cookie-consent')
  hasConsent.value = false
  revokeAnalyticsConsent()
}

const grantAnalyticsConsent = () => {
  gtag('consent', 'update', {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'granted'
  })
}

const revokeAnalyticsConsent = () => {
  gtag('consent', 'update', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied'
  })
}
</script>

<style scoped lang="scss">
.cookie-banner {
  @apply fixed bottom-0 left-0 right-0 bg-slate-900 border-t-2 border-amber-400 p-6 shadow-2xl z-50;
}

.cookie-content {
  @apply container mx-auto max-w-4xl;

  h3 {
    @apply text-2xl text-amber-400 mb-3 mt-0;
  }

  p {
    @apply text-gray-300 mb-4;
  }
}

.cookie-buttons {
  @apply flex gap-4;

  button {
    @apply px-6 py-2 rounded-full font-bold transition-all duration-150;

    &.accept {
      @apply bg-green-600 text-white;

      &:hover {
        @apply bg-green-700 shadow-xl;
      }
    }

    &.decline {
      @apply bg-gray-600 text-white;

      &:hover {
        @apply bg-gray-700;
      }
    }
  }
}

.revoke-button {
  @apply fixed bottom-4 right-4 bg-gray-700 text-white text-sm px-4 py-2 rounded-full opacity-50 hover:opacity-100 transition-opacity;
}
</style>