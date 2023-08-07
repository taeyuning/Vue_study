<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>{{ rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
    <header>
      <h2>Interested? Reach out now!</h2>
      <base-button link :to="contactLink">Contact</base-button>
    </header>
    <!-- 나중에 중첩라우트 추가 -->
    <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area" ></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return{
      selectedCoach: null
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstNme + ' ' + this.selectedCoach.lastName;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    },
    contactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    }
  },
  created() {
    //확인용
    console.log('props id:', this.id);
    // find 함수 true 반환하면 해당 coach를 selectedCoach에 저장
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      coach => coach.id === this.id
      );
  },
};
</script>
  