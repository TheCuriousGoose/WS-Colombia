<script setup lang="ts">
const props = defineProps({
    country: {
        type: Object
    },
    medal: {
        type: String
    }
})
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>Disciplines</th>
                <th>Medals</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(discipline, index) in props.country.disciplines" :key="index">
                <td>{{ discipline.name }}</td>
                <td>{{ discipline[props.medal] }}</td>
            </tr>
        </tbody>
    </table>
</template>