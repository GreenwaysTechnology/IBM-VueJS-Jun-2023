<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const gotoReview = () => {
    router.push('/review')
}
</script>
<template>
    <div class="about">
        <h1>Movie View</h1>
        <ul>
            <li>
                <RouterLink to="/movies/action">
                    <span>Action</span>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/movies/drama">
                    <span>Drama</span>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/movies/horror">
                    <span>Horror</span>
                </RouterLink>
            </li>
        </ul>
        <!-- Nested Menu Display -->
        <RouterView />
        <button @click="gotoReview">Review</button>

    </div>
</template>