<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div class="Edit">
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <h3 class="text-success">Edit Contact</h3>
          <p class="fontstyle-italic">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda eos error cum, nihil
            repudiandae officia sit, amet voluptatibus vero deserunt soluta ut repellat ea dolorem
            eveniet animi esse ab dignissimos.
          </p>
        </div>
      </div>
    </div>
    <div class="container mt-3">
      <div class="row">
        <div class="col-md-4">
          <form @submit.prevent="UpdateSubmit()">
            <div class="mt-3">
              <input type="text" v-model="contact.name" class="form-control" placeholder="name" />
            </div>
            <div class="mt-3">
              <input type="text" v-model="contact.photo" class="form-control" placeholder="Photo Url" />
            </div>
            <div class="mt-3">
              <input type="email" v-model="contact.email"  class="form-control" placeholder="Email" />
            </div>
            <div class="mt-3">
              <input type="number" v-model="contact.mobile" class="form-control" placeholder="Mobile" />
            </div>
            <div class="mt-3">
              <input type="text" v-model="contact.company" class="form-control" placeholder="Company" />
            </div>
            <div class="mt-3">
              <input type="text" v-model="contact.title" class="form-control" placeholder="Title" />
            </div>
            <div class="mt-3">
              <select  class="form-control" v-if="groups.length > 0">
                <option value="">Select Group</option>
                <option v-for="group in groups" :key="group.id" :value="group.id">{{ group.name }}</option>
              </select>
            </div>
            <div class="mt-3">
              <input type="submit" class="btn btn-success" value="Update" />
            </div>
          </form>
        </div>
        <div class="col-md-4">
        <img class="contact-image" style="width: 250px;" :src="contact.photo" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ContactServices } from '@/Services/ContactServices';

export default {
  name: 'EditContact',
  data() {
    return {
      contactId: this.$route.params.id,
      Loading: false,
      contact: {},
      groups: {},
      errorMessage: null,
    };
  },
  async created() {
    try {
      this.Loading = true;
      const response = ContactServices.getContact(this.contactId);
      const getAllGroups = await ContactServices.getALLgroups();
      this.contact = (await response).data;
      this.groups = getAllGroups.data;
      this.Loading = false;
    } catch (error) {
      this.error = this.errorMessage;
      this.Loading = false;
    }
  },
  methods: {
    // eslint-disable-next-line consistent-return
    async UpdateSubmit() {
      try {
        console.log(this.contact);
        const response = await ContactServices.updateContact(this.contact, this.contactId);
        if (response) {
          return this.$router.push('/contacts');
        }
        console.log(this.response);
        // eslint-disable-next-line no-sequences
        return this.$router.push(`/edit/${this.contact, this.contactId}`);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style lang="css"></style>
