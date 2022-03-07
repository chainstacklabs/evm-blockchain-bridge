import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => {
    return {
      ethTokenAddress: '',
      qTokenAddress: '',
      provider: {},
      ethTokenContract: null,
    }
  },

  actions: {
    //@ts-ignore
    // saveWalletData(payload: WalletData) {
    //   this.address = payload.address
    //   this.acc_short = `${payload.address.slice(
    //     0,
    //     2
    //   )}...${payload.address.slice(-4)}`
    // },
    //TODO: save contract provider and contract itself to use it in all views
  },
})
