<template>
    <div class="right-sidebar messages-sidebar section-block p-0">
        <ul>
            <li>
                <router-link active-class="active" to="/Messages">
                    Всички
                </router-link>
            </li>
            <li>
                <router-link to="/Messages">
                    Непрочетени
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Messages',
};
</script>
