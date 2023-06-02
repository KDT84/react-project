
function useLocaStorage (key) {

    function set(value) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    function get() {
        const item = localStorage.getItem(key)
        if (item) {
            return JSON.parse(item)
        }
    }

    return { set, get }
}

export default useLocaStorage;