// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere un’immagine presa anch’essa da un data assieme al valore alt dell'attributo. Poi aggiungete all'immagine una classe sempre presa dal data.
// Se volete potete personalizzare l'esercizio come volete, aggiungendo altre cose viste a lezione!

var app = new Vue({
    el: '#container',
    data: {
        nome: '',
        cognome: '',
        display: 'none'
    },
    methods: {
        stampa() {
            this.display = 'show';
        }
    }
});