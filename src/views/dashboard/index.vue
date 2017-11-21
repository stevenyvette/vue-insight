<template>
    <div class="dashboard-container">
        <admin-dashboard></admin-dashboard>
        <editor-dashboard></editor-dashboard>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin/index'
import editorDashboard from './editor/index'

export default {
    name: 'dashboard',
    components: { adminDashboard, editorDashboard },
}
</script>
