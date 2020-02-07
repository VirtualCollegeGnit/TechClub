<template>
  <div class="q-pa-lg">
    <h2>
      Congrats
      <b>{{ $oidc.user.profile.name }}!!</b>
    </h2>

    <div>
      <q-btn label="Logout" size="lg" color="black" @click="logout" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout: function() {
      this.$oidc.signOut();
    }
  }
};
</script>

<style></style>
