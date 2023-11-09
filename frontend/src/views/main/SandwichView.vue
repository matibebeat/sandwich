<template>
    <div class="sandwich-view">
        <h1> Sandwich Characteristics </h1>
        <div class="sandwich-info">
            <div class="sandwich-image">
                <img :src="sandwich.image" alt="Sandwich Image" />
            </div>
            <div class="sandwich-details">
                <p> Name: {{ sandwich.name }} </p>
                <p> Price: {{ sandwich.price }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SandwichView",
    data() {
        return {
            sandwich: {},
        };
    },
    methods: {
        async getSandwich() {
            try {
                const response = await fetch(
                    `http://localhost:4000/sandwich/${this.$route.params.id}`
                );
              this.sandwich = await response.json();
            } catch (error) {
                console.log(error);
            }
        },
    },
    mounted() {
        this.getSandwich();
    },
};
</script>

<style scoped>
.sandwich-view {
    background-color: #f2f2f2;
    padding: 20px;
}

.sandwich-info {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin-top: 20px;
    display: flex;
    flex-direction: row;
}

.sandwich-image {
    margin-right: 20px;
}

.sandwich-image img {
    width: 300px;
    height: auto;
}

.sandwich-details {
    display: flex;
    flex-direction: column;
}
</style>
