// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere un’immagine presa anch’essa da un data assieme al valore alt dell'attributo. Poi aggiungete all'immagine una classe sempre presa dal data.
// Se volete potete personalizzare l'esercizio come volete, aggiungendo altre cose viste a lezione!

var app = new Vue({
    el: '#container',
    data: {
        nome: '',
        cognome: '',
        display: 'none',
        bgc:'',
        hide: '',
    },
    methods: {
        stampa() {
            this.display = 'show';
            this.bgc = 'black';
            this.hide = 'none';
            
        }
    }
});

var tl = gsap.timeline();
tl.from("input", {y: -1000, duration: 1, stagger: 1});
tl.from("button", {y: +500, duration: .5});

