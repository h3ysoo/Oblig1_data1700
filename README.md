# Kinobillettapplikasjon

Dette er en enkel JavaScript-applikasjon for å registrere kjøp av kinobilletter.

## Funksjonalitet

Applikasjonen lar brukerne velge en film, angi antall billetter, og legge inn personlig informasjon som fornavn, etternavn, telefonnummer og e-postadresse.
Når brukeren trykker på "Kjøp billett"-knappen, blir billettinformasjonen lagret som et objekt i et array, og deretter vises alle billettene i en liste nedenfor.
Det er også en "Slett alle billettene"-knapp for å tømme arrayet og fjerne alle billettene fra listen.

## Inputvalidering

Det er en enkel inputvalidering som sjekker at alle feltene er fylt ut før du kjøper en billett. Hvis ett eller flere felt ikke er fylt ut, vises en varsling, og billetten blir ikke kjøpt.

For e-postfeltet er det en innebygd validering som sjekker om det angitte e-postformatet er gyldig.

## Hvordan bruke

1. Åpne `index.html` i en nettleser.
2. Fyll ut alle feltene og trykk på "Kjøp billett"-knappen for å registrere en billett.
3. Se registrerte billetter under "Alle billetter".
4. For å slette alle billettene, trykk på "Slett alle billettene"-knappen.