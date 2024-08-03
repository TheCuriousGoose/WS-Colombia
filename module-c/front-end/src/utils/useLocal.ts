import { ref, watch } from 'vue'

export function useLocalStorage<T>(key: string, defaultValue: T, watchCallback?: () => void) {
    const value = ref<T>(defaultValue);

    // Retrieve stored value from localStorage
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
        value.value = JSON.parse(storedValue) as T;
    } else {
        localStorage.setItem(key, JSON.stringify(defaultValue));
    }

    // Watch for changes in the 'value' and update localStorage
    watch(value, (newValue, oldValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));

        if (watchCallback) {
            watchCallback();
        }
    }, {
        deep: true
    });

    return value;
}