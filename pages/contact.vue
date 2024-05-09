<script setup>
const formContact = reactive({
    clubName: '',
    email: '',
    vat: '',
    clubCity: ''
})

</script>

<template>
    <section class=" mt-20">
        <div class="container space-y-[86px]">
            <div class="text-center space-y-9">
                <h1 class="text-center text-4xl md:text-7xl text-white">
                    <span class="font-medium italic">
                        NEXT LEVEL PADEL
                    </span> <br>
                    CONTRIBUISCI CON IL TUO CLUB <br>
                    ALLA <span class="italic font-medium">RIVOLUZIONE</span>
                </h1>
                <p class="text-white text-xl md:text-2xl">
                    Contattaci per maggiori informazioni o per candidare il tuo Club. <br>
                    Utilizza il modulo sottostante o inviaci una e-mail a <span
                        class=" text-secondary">info@padeldao.com</span>
                </p>
            </div>
            <div class="max-w-[639px] mx-auto">
                <form action="">
                    <div class="space-y-9">
                        <form-input input-type="text" id="name" input-placeholder="Inserisci il nome"
                            input-label="Nome del tuo Club" v-model="formContact.clubName" />
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>