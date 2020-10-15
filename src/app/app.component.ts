/**
 * Pr déclarer une classe comme composant de notre application, on importe "component"
 * via @angular/core
 */
import {Component} from '@angular/core';

/**
 * C'est ce que l'on appelle un DECORATEUR
 * Il va ns permettre de donner des renseignements sur notre composant
 */
@Component({

  /**
   * Le sélecteur est l'ID, l'identifiant UNIQUE du composant au sein de l'application
   */
  selector: 'app-root',

  /**
   * C'est la partie visible de notre composant.
   * C'est ce qui s'affiche à notre utilisateur.
   */
  templateUrl: './app.component.html',

  /**
   * Déclarer les styles CSS spécifiques à ce composant.
   */
  styleUrls: ['./app.component.css']
})
/**
 * La classe contient les données du composant.
 * Ds notre architecture MVVM, notre classe correspond au Model.
 */
export class AppComponent {

  // -- Déclaration d'une variable / propriété
  title = 'Gestion de Contact';
  contactProfil = null;

// -- Déclaration d'un objet contact

  unContact = {
    id: 1,
    name: 'Jade IMBERT',
    email: 'jade.imbert@gmail.com',
    tel: '06 78 68 91 61'
  };

// Tableau de contact
  mesContacts = [
    {
      id: 1,
      name: 'Best family',
      email: 'family.bretoche',
      tel: '07 83 97 15 15'
    },
    {
      id: 2,
      name: 'Farah IMBERT',
      email: 'farah.imbert@hotmail.com',
      tel: '07 89 45 23 56'
    },
    {
      id: 3,
      name: 'Kevin IMBERT',
      email: 'kevin.imbert@gmail.com',
      tel: '07 96 52 41 23'
    },
    {
      id: 4,
      name: 'Jade IMBERT',
      email: 'jade.imbert@gmail.com',
      tel: '01 56 89 78 45'
    }
  ];

  /**
   * Permet d'afficher les informations
   * d'un objet contact
   */
  displayContact(contactCliqueParMonUtilisateur): void {
    console.log(contactCliqueParMonUtilisateur);

    this.contactProfil = contactCliqueParMonUtilisateur;
  }

  /**
   * Cette fonction est automatiquement appelée
   * par Angular lorsqu'un nouveau contact est créé.
   */
  addContact(contact): void {
    this.mesContacts.push(contact);
  }

}

