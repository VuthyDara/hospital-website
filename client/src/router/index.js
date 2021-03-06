import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'
import message from '../views/Message-page.vue'
import doctor from '../views/Doctor.vue'
import admin from '../views/Admin.vue'
import patient from '../views/Patient-stories.vue'
import patient1 from '../views/Patient-story1.vue'
import patient2 from '../views/Patient-story2.vue'
import patient3 from '../views/Patient-story3.vue'
import patient4 from '../views/Patient-story4.vue'
import feedback from '../views/Feedback-page.vue'
import contact from '../views/Contact-page.vue'
import thankyou from '../views/Thankyou-page.vue'
import generalcheckup from '../views/General-Checkup.vue'
import heart from '../views/Heart.vue'
import children from '../views/Children.vue'
import woman from '../views/Woman.vue'
import emergencypage from '../views/EmergencyPage.vue'
import brain from '../views/Brain.vue'
import stomach from '../views/Stomach.vue'
import ICU from '../views/ICU.vue'
import doctordetail from '../views/DoctorDetail.vue'
import alltips from '../views/Alltips-page.vue'
import tip1 from '../views/Tip-1.vue'
import tip2 from '../views/Tip2.vue'
import tip3 from '../views/Tip3.vue'
import tip4 from '../views/Tip4.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/message',
    name: 'message',
    component: message
  },
  {
    path: '/doctor',
    name: 'doctor',
    component: doctor
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin
  },
  {
    path: '/patient-story',
    name: 'patients',
    component: patient
  },
  {
    path: '/patient1',
    name: 'patient1',
    component: patient1
  },
  {
    path: '/patient2',
    name: 'patient2',
    component: patient2
  },
  {
    path: '/patient3',
    name: 'patient3',
    component: patient3
  },
  {
    path: '/patient4',
    name: 'patient4',
    component: patient4
  },
  {
    path: '/feedback',
    name: 'feedbackpage',
    component: feedback
  },
  {
    path: '/contact',
    name: 'contactpage',
    component: contact
  },

  {
    path: '/generalcheckup',
    name: 'generalcheckup',
    component: generalcheckup
  },
  {
    path: '/heart',
    name: 'heart',
    component: heart
  },
  {
    path: '/children',
    name: 'children',
    component: children
  },
  {
    path: '/woman',
    name: 'woman',
    component: woman
  },
  {
    path: '/emergencypage',
    name: 'emergencypage',
    component: emergencypage
  },
  {
    path: '/brain',
    name: 'brain',
    component: brain
  },
  {
    path: '/stomach',
    name: 'stomach',
    component: stomach
  },
  {
    path: '/ICU',
    name: 'ICU',
    component: ICU
  },
  {
    path: '/doctor-detail/:name',
    name: 'doctor-detail',
    props: true,
    component: doctordetail
  },
  {
    path: '/alltips',
    name: 'alltips',
    component: alltips
  },
  {
    path: '/tip1',
    name: 'tip1',
    component: tip1
  },
  {
    path: '/tip2',
    name: 'tip2',
    component: tip2
  },
  {
    path: '/tip3',
    name: 'tip3',
    component: tip3
  },
  {
    path: '/tip4',
    name: 'tip4',
    component: tip4
  },
  {
    path: '/thankyou',
    name: 'thankyou',
    component: thankyou
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
