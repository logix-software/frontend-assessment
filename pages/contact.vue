<script setup>
const formContact = reactive({
    clubName: '',
    email: '',
    vat: '',
    clubCity: ''
})

const storeContactInfo = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formContact))
}

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
                <form @submit="storeContactInfo">
                    <div class="space-y-9">
                        <form-input input-type="text" id="name" input-placeholder="Inserisci il nome"
                            input-label="Nome del tuo Club" v-model="formContact.clubName" />
                        <form-input input-type="text" id="vat" input-placeholder="Inserisci la P.IVA"
                            input-label="P.IVA/VAT" v-model="formContact.vat" />
                        <form-input input-type="email" id="email" input-placeholder="Indirizzo email"
                            input-label="E-mail" v-model="formContact.email" />
                        <form-input input-type="text" id="club-city" input-placeholder="Città"
                            input-label="In quale città si trova il tuo Club?" v-model="formContact.clubCity" />
                        <div>
                            <button type="submit" class="btn-primary w-full">Invia la candidatura</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>