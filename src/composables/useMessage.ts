let isAlertOpen = false
export const useMessage = () => {
    const message = (msg: string) => {
        if (!process.client) return
        if (isAlertOpen) return

        isAlertOpen = true
        alert(msg)
        isAlertOpen = false
    }

    return { message }
}
