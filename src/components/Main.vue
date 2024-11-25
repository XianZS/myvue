<template>
    <h3>Main : {{ MainSearch }}</h3>
    搜索:
    <SearchComponent @SearchInput="MainSearchInput"/>
</template>

<script>
import SearchComponent from "@/components/SearchComponent.vue";

export default {
    data() {
        return {
            MainSearch: ""
        }
    },
    components: {
        SearchComponent,
    },
    methods: {
        MainSearchInput(searchInput) {
            this.MainSearch = searchInput;
        }
    }
}
</script>
