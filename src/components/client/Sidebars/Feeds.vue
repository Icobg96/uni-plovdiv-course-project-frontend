<template>
    <div class="right-sidebar feeds-sidebar section-block p-0">
        <ul>
            <li>
                <router-link :class="{'active' : $route.fullPath === '/Feeds'}" to="/Feeds">
                    Всички постове
                </router-link>
            </li>
            <li>
                <router-link :class="{'active' : $route.fullPath === '/Feeds/news'}"
                to="/Feeds/news">
                    Новини
                </router-link>
            </li>
            <li>
                <router-link :class="{'active' : $route.fullPath === '/Feeds/documents'}"
                to="/Feeds/documents">
                    Документи
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Feeds',
};
</script>
