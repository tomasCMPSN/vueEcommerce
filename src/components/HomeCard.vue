<script setup>
defineProps({
    title: String
})
</script>

<template>
    <Card>
        <template #title> {{ title }} </template>
        <template #content>
            <div class="grid place-items-center px-16">
                <p class="text-center">
                    Cloud Products are all made to standard sizes so that you can mix and match them freely.
                </p>
                <RouterLink to="/categories">
                    <Button label="SHOP NOW" class="mt-6" />
                </RouterLink>
            </div>
        </template>
    </Card>
</template>