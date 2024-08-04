<script setup lang="ts">
const props = defineProps({
    medals: {
        type: Object
    }
})
</script>

<template>
    <table>
        <thead>
            <tr>
                <th v-for="(amount, name) in props.medals" :key="name">
                    {{ name }}
                </th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td v-for="(amount, name) in props.medals" :key="name">
                    {{ amount }}
                </td>
                <td>{{ Object.values(props.medals).reduce((sum: number, medal: number) => sum + medal) }}</td>
            </tr>
        </tbody>
    </table>
</template>