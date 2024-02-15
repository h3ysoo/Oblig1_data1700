// script.js

let billetter = [];

function kjopBillett() {
    const film = document.getElementById('film').value;
    const antall = document.getElementById('antall').value;
    const fornavn = document.getElementById('fornavn').value;
    const etternavn = document.getElementById('etternavn').value;
    const telefon = document.getElementById('telefon').value;
    const epost = document.getElementById('epost').value;

    const antallError = document.getElementById('antallError');
    const fornavnError = document.getElementById('fornavnError');
    const etternavnError = document.getElementById('etternavnError');
    const telefonError = document.getElementById('telefonError');
    const epostError = document.getElementById('epostError');

    antallError.textContent = '';
    fornavnError.textContent = '';
    etternavnError.textContent = '';
    telefonError.textContent = '';
    epostError.textContent = '';

    let isValid = true;

    if (!film) {
        isValid = false;
    }

    if (!antall) {
        antallError.textContent = 'Må skrive noe i antall';
        isValid = false;
    }

    if (!fornavn) {
        fornavnError.textContent = 'Må skrive noe i fornavn';
        isValid = false;
    }

    if (!etternavn) {
        etternavnError.textContent = 'Må skrive noe i etternavn';
        isValid = false;
    }

    if (!telefon.match(/^\d{8}$/)) {
        telefonError.textContent = 'Ugyldig telefonnummer';
        isValid = false;
    }

    if (!epost) {
        epostError.textContent = 'Må skrive noe i e-post';
        isValid = false;
    } else if (!epost.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        epostError.textContent = 'Ugyldig e-postadresse';
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    const billett = {
        film,
        antall,
        fornavn,
        etternavn,
        telefon,
        epost
    };

    billetter.push(billett);
    oppdaterBillettListe();
    blankFelter();
}

function oppdaterBillettListe() {
    const billettListe = document.getElementById('billettListe');
    billettListe.innerHTML = '';
    billetter.forEach(billett => {
        const item = document.createElement('li');
        item.textContent = `Film: ${billett.film}, Antall: ${billett.antall}, Navn: ${billett.fornavn} ${billett.etternavn}, Telefon: ${billett.telefon}, E-post: ${billett.epost}`;
        billettListe.appendChild(item);
    });
}

function slettAlleBilletter() {
    billetter = [];
    oppdaterBillettListe();
}

function blankFelter() {
    document.getElementById('film').value = '';
    document.getElementById('antall').value = '';
    document.getElementById('fornavn').value = '';
    document.getElementById('etternavn').value = '';
    document.getElementById('telefon').value = '';
    document.getElementById('epost').value = '';

    document.getElementById('antallError').textContent = '';
    document.getElementById('fornavnError').textContent = '';
    document.getElementById('etternavnError').textContent = '';
    document.getElementById('telefonError').textContent = '';
    document.getElementById('epostError').textContent = '';
}
document.getElementById("fornavn").addEventListener("input", function() {
    this.value = this.value.replace(/[0-9]/g, "");
});

document.getElementById("etternavn").addEventListener("input", function() {
    this.value = this.value.replace(/[0-9]/g, "");
});

