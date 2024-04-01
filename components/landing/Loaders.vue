<script setup>
    const grid = ref(null)
    const trigger = ref(false)

    onMounted(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    trigger.value = true
                }
            })
        })

        observer.observe(grid.value)
    })

    let groups = ref([
        [
            {
                title: "Palabras iniciales por minuto",
                val: 50,
                label: "252"
            },
            {
                title: "Palabras finales por minuto",
                val: 90,
                label: "535"
            }
        ],
        [
            {
                title: "Tasa de comprensión inicial",
                val: 65,
                label: "65%"
            },
            {
                title: "Tasa de comprensión final",
                val: 84,
                label: "84%"
            }
        ],
        [
            {
                title: "Índice de lectura efectiva inicial",
                val: 40,
                label:"162"
            },
            {
                title: "Índice de lectura efectiva final",
                val: 95,
                label: "438"
            }
        ]
    ])
</script>

<template>
    <br>
    <b><span class="text-xl text-bold mt-4">Resultados de nuestros cursos</span></b>
    <br>
    <span class="text-sm mt-4">Media de 40.000 participantes en cursos en Alemania desde 2001</span>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4" ref="grid">
        <div class="col" v-for="group in groups">
            <div v-for="(bar, index) in group" class="mb-4">
                <h4>{{ bar.title }}</h4>
                <VaProgressBar
                :model-value="trigger ? bar.val : 0"
                size="large"
                :color="index === 0 ? 'secondary' : 'primary'"
                >{{ bar.label }}</VaProgressBar>
            </div>
        </div>
    </div>
</template>
