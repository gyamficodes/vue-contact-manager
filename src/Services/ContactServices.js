/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */
/* eslint-disable linebreak-style */
import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export class ContactServices {
    static serverURL = 'http://localhost:3000';

    static getALLContacts() {
      let dataURL = `${this.serverURL}/contacts`;
      return axios.get(dataURL);
    }

    static getContact(contactId) {
      let dataURL = `${this.serverURL}/contacts/${contactId}`;
      return axios.get(dataURL);
    }

    static createContact(contact) {
      let dataURL = `${this.serverURL}/contacts/`;
      return axios.post(dataURL, contact);
    }

    static updateContact(contact, contactId) {
      let dataURL = `${this.serverURL}/contacts/${contactId}`;
      return axios.put(dataURL, contact);
    }

    static deleteContact(contactId) {
      let dataURL = `${this.serverURL}/contacts/${contactId}`;
      return axios.delete(dataURL);
    }

    static getALLgroups() {
      let dataURL = `${this.serverURL}/groups/`;
      return axios.get(dataURL);
    }

    static getGroup(contact) {
      let { groupId } = contact;
      let dataURL = `${this.serverURL}/groups/${groupId}`;
      return axios.get(dataURL);
    }
}
