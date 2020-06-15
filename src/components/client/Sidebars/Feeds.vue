<template>
    <div class="right-sidebar feeds-sidebar section-block p-0">
        <ul>
            <li>
                <router-link active-class="active" to="/Feeds">
                    Всички постове
                </router-link>
            </li>
            <li>
                <router-link to="/documents">
                    Новини
                </router-link>
            </li>
            <li>
                <router-link to="/documents">
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
