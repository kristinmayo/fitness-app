<template>
  <v-layout>
    <v-flex>
      <v-toolbar>
        <v-toolbar-title>Exercises</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          dark
          large
          class="blue darken-2"
          :to="{
            name: 'new-exercise'
          }">
          New
        </v-btn>
      </v-toolbar>
      <div
        class="exercise"
        v-for="exercise in exercises"
        :key="exercise.id">
      <v-layout>
      <v-flex xs4>
        <div class="title">
          {{exercise.title}}
        </div>
        <div class="muscle">
          {{exercise.muscleGroup}}
        </div>
        <div class="goal">
          {{exercise.goalGroup}}
        </div>
        <div class="level">
          {{exercise.difficulty}}
        </div>
          </v-flex>
          <v-flex xs2>
            <img class="image" :src="exercise.imageURL" />
            <v-btn
              dark
              class="blue darken-2"
              @click="navigateTo({
                name: 'exercise-edit',
                params: {
                  exerciseId: exercise.id
                }
              })">
              Add to my workout
            </v-btn>
          </v-flex>
        </v-layout>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import ExerciseService from '@/services/ExerciseService'
export default {
  data () {
    return {
      exercises: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
      console.log(route)
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.exercises = (await ExerciseService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>
.exercise {
  padding: 15px;
  height: 300px;
  overflow: hidden;
}
.title {
  font-size: 24px;
}
.muscle {
  font-size: 16px;
}
.goal {
  font-size: 16px;
}
.level {
  font-size: 16px;
}
.image {
  width: 200%;
  margin: 0 auto;
}
</style>
