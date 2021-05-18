

/* 
Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider

Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera (usate un event listener su document e ascoltate per il keyup)

Utiliziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider

Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider

Clicchiamo sui pallini e mostriamo l’immagine corrispondente

 */
const app = new Vue ({
    el: '#root',
    data: {
        //contatore
        counter: 0,
        images: [
            "http://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/04/mars_landscape/21916769-2-eng-GB/Mars_landscape_pillars.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/NASA_Mars_Rover.jpg/310px-NASA_Mars_Rover.jpg",
            "http://www.esa.int/var/esa/storage/images/esa_multimedia/images/2006/10/residual_water_ice_in_vastitas_borealis_crater/9810168-3-eng-GB/Residual_water_ice_in_Vastitas_Borealis_Crater_pillars.jpg",
            "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQ-mPuUb4I_AYrFVlgVH1Osc3YIlwHX_KgYaFzSChB9DFOU2PBoReHGyN-1MOS11mV0RfnWsPzytJ1pd9WSxqo",
        ]
        
    },
    methods:{
        //funzione che manda indietro il contatore
        prev () {
            console.log("cliccato su prev");
            if (this.counter === 0){
                return this.counter = this.images.length - 1;
            }
            return this.counter -= 1;

        },
        //funzione che manda avanti il contatore
        next () {
            console.log("cliccato su next");
            if (this.counter > this.images.length -1){
                return this.counter = 0;
            }
            return this.counter +=1;

        }
    },
    /* mounted(){
    
    } */
})