export const useAppStore = jest.fn().mockImplementation(() => {
    return {
        isMap: false, 
        selectedItem: null,
        items: []
    }
})