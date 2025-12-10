export const useConfirm = () => {
    const confirm = (msg: string): Promise<boolean> => {
        if (!process.client) return Promise.resolve(false)

        return Promise.resolve(window.confirm(msg))
    }

    return {
        confirm,
    }
}
