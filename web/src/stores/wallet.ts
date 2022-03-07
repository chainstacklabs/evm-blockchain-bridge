import { defineStore } from 'pinia'

interface WalletData {
  address: string
  network: string
}

export const useWalletStore = defineStore('wallet', {
  state: () => {
    return {
      address: '',
      provider: null,
      acc_short: '',
    }
  },

  actions: {
    //@ts-ignore
    saveWalletData(payload: WalletData) {
      this.address = payload.address
      this.network = payload.network
      this.acc_short = `${payload.address.slice(
        0,
        2
      )}...${payload.address.slice(-4)}`
    },
  },
})
