<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable max-len -->
<template>
  <div class="add">
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <h3 class="text-success">Add Contact</h3>
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
          <form @submit.prevent="submitCreate()">
            <div class="mt-3">
              <input v-model="contacts.name" type="text" class="form-control" placeholder="name" />
            </div>
            <div class="mt-3">
              <input v-model="contacts.phtoto" type="text" class="form-control" placeholder="Photo Url" />
            </div>
            <div class="mt-3">
              <input v-model="contacts.email" type="email" class="form-control" placeholder="Email" />
            </div>
            <div class="mt-3">
              <input v-model="contacts.mobile" type="number" class="form-control" placeholder="Mobile" />
            </div>
            <div class="mt-3">
              <input v-model="contacts.company" type="text" class="form-control" placeholder="Company" />
            </div>
            <div class="mt-3">
              <input v-model="contacts.title" type="text" class="form-control" placeholder="Title" />
            </div>
            <div class="mt-3"  >
              <select  v-model="contacts.groupId" class="form-control" v-if="groups.length > 0">
                <option value="">Select Group</option>
                <option :value="group.id" v-for="group in groups" :key="group.id">{{ group.name }}</option>
              </select>
            </div>
            <div class="mt-3">
              <input type="submit" class="btn btn-success" value="Create" />
            </div>
          </form>
        </div>
        <div class="col-md-4">
        <img class="contact-image2" :src="contacts.phtoto" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ContactServices } from '@/Services/ContactServices';

export default {
  name: 'AddContact',
  props: [],
  data() {
    return {
      contacts: {
        name: '',
        phtoto: '',
        email: '',
        mobile: '',
        company: '',
        title: '',
        groupId: '',
      },
      groups: [],
    };
  },
  async created() {
    try {
      const response = await ContactServices.getALLgroups(this.contacts);
      this.groups = response.data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    // eslint-disable-next-line consistent-return
    async submitCreate() {
      try {
        const response = await ContactServices.createContact(this.contacts);
        if (response) {
          return this.$router.push('/contacts');
        }
        return this.$router.push('/add');
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style lang="css"></style>
