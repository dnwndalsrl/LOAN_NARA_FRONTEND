import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', {
    state: () => ({
        isMegaMenuOpen: false,
    }),

    actions: {
        openMegaMenu() {
            this.isMegaMenuOpen = true
            document.body.style.overflow = 'hidden'
        },

        closeMegaMenu() {
            this.isMegaMenuOpen = false
            document.body.style.overflow = ''
        },
    },
})
