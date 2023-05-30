PROBLEMA:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

1° SOTTOPROBLEMA: 
Visualizzare in pagina 5 numeri casuali.

SOLUZIONE:
1 - Creare un ciclo FOR per i numeri casuali;
2 - Utilizzare Math.random per generare i numeri random;
3 - Creare un array per contenere i 5 numeri generati;
4 - Creare un div con id='randomNumber';
5 - Richiamare randomNumber con document.getElementById;
6 - Mostrare a video i 5 numeri random generati;

2° SOTTOPROBLEMA: 
Da lì parte un timer di 30 secondi.

SOLUZIONE:
1 - Utilizzare set interval per generare il timer da 30 secondi;
2 - Creare un div con id='timer';
3 - Richiamare timer con document.getElementById;
4 - Mostrare a video il timer che scorre;

3° SOTTOPROBLEMA:
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

SOLUZIONE:
1 - Utilizzare .innerHTML=''; per rimuovere i numeri random;
2 - Utilizzare 5 prompt in cui si chiede all'utente di inserire i 5 numeri random visti precedentemente;

4° SOTTOPROBLEMA:
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

SOLUZIONE:
1 - Creare un controllo con .includes per verificare quanti numeri ha indovinato l'utente;
2 - Mostrare a video la quantità di numeri indovinati e quali sono stati indovinati;
