import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', {
    state: () => ({
        // PC일때 자식메뉴 Open Value
        isMegaMenuOpen: false,

        // LABTOP, TABLET, MOBILE일때 자식메뉴 Open Value
        isDrawerMenuOpen: false,
    }),

    actions: {
        openMegaMenu() {
            this.isMegaMenuOpen = true
        },

        closeMegaMenu() {
            this.isMegaMenuOpen = false
        },

        openDrawerMenu() {
            this.isDrawerMenuOpen = true
        },

        closeDrawerMenu() {
            this.isDrawerMenuOpen = false
        },
    },
})
