<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="bg-green-600">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <img 
            src="https://testnet.frenscan.io/images/frenChain-ce348be4ef68432bcda4f39bce13033b.svg?vsn=d"
            class="h-12 w-12"
            >
            <span class="ml-4 mt-1 text-lg font-bold text-white">Bridge</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

// import { useWalletStore } from '../stores/wallet'

export default defineComponent({
  components: {},
  // setup() {
  //   const walletStore = useWalletStore()
  //   const isOpen = ref<boolean>(false)

  //   const connectWallet = async () => {
  //     try {
  //       // @ts-expect-error Window.ethereum not typed
  //       const data = await window.ethereum.request({
  //         method: 'eth_requestAccounts',
  //       })
  //       console.log('data :>> ', data)

  //       walletStore.saveWalletData({ address: data[0] })
  //       console.log('DApp connected to your wallet 💰')
  //     } catch (error) {
  //       console.error('Error connecting DApp to your wallet')
  //       console.error(error)
  //     }
  //   }
  //   return {
  //     connectWallet,
  //     walletStore,
  //     isOpen,
  //   }
  // },
})
</script>
