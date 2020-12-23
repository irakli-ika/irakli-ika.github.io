<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="storetResButtonMode">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resources</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>


<script>
    import StoredResources from './StoredResources.vue'
    import AddResource from './AddResource.vue'

export default {
    components: {
        StoredResources,
        AddResource
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            storedResources: [
                {
                    id: 'google',
                    title: 'Google',
                    description: 'for searching',
                    link: 'http://google.com'
                },
                {
                    id: 'github',
                    title: 'GitHub',
                    description: 'social network for programmer',
                    link: 'http://github.com'
                }
            ]
        }        
    },
    provide() {
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            deleteResource: this.removeResource
        }
    },
    computed: {
        storetResButtonMode() {
            return this.selectedTab === 'stored-resources' ? null : 'flat'
        },
        addResButtonMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat'
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab
        },
        addResource(title, description, link) {
            const newResource = {
                id: new Date().toISOString(),
                title,
                description,
                link
            }
            this.storedResources.unshift(newResource)
            this.selectedTab = 'stored-resources'
        },
        removeResource(resId) {
            const findIndex = this.storedResources.findIndex(res => res.id === resId)
            this.storedResources.splice(findIndex, 1)
        }
    }
}
</script>