# Slack Clone

Questo progetto contiene il codice Frontend (client) e Backend (server)

## Il progetto

Ho deciso di riprodurre l'app per il mio portfolio perché ho sempre ritenuto Slack un prodotto di successo per la sua semplicità ma allo stesso tempo per la sua efficacia.

Ho voluto ricreare sia l'interfaccia Frontend, sia il server da Backend con lo scambio di dati tramite Restful API.

Gli obiettivi che mi sono prefissato sono stati:

- Studiare e ricreare il design e riprodurlo utilizzando la libreria React.

- Creazione del Backend (server e possibilità di effetuare richieste Rest Api al database MongoDB

- Effettuare azioni base come la creazione di un canale (chat), inviare messaggi e navigare

- Possibilità di inserire messaggi ai singoli canali

- Scrivere un codice semplice ed essenziale attrerso l'utilizzo di variabili, components ed evitando le ripetizioni. Inoltre ho voluto focalizzarmi su un codice facilmente gestibile e scalabile

## Gli strumenti

Ho sviluppato l'interfaccia Frontend utilizzando **React**, **React Router-Dom**, **CSS** e la **libreria Material UI**. Ho caricato il codile del progetto sul mio account GitHub e l'app su Netlify.

Il Backend è stato sviluppato utilizzando **NodeJs** , **Express** , **MongoDB e Mongoose**.

## Il codice

Il codice di questo progetto si suddivide nelle cartelle **client** e **server**, dove all'interno sono presenti i children e i relativi file css:

Ho deciso di non creare un albero delle componenti troppo complicato, in modo da rendere il codice il più essenziale possibile e da far passare le varie funzioni tra i componenti in modo semplice.

Ho inoltre utilizzato il pacchetto **React-Router-DOM**, che permette di creare delle directories in modo rapido e dinamico. Il pacchetto è stato utilizzato principalmente per cambiare le pagine dalla sidebar, nonostante queste siano statiche poiché si tratta di un progetto esclusivamente Frontend.
