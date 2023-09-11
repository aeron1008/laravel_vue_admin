// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { firebaseObj } from './config/firebaseConfig'
// import firebaseObj from './config/firebaseConfig'

Vue.config.productionTip = false

const unsubscribe = firebaseObj.auth().onAuthStateChanged((user) => {
    store.dispatch('setUser', user)

    /* eslint-disable no-new */
    new Vue({
        el: '#app',
        router,
        template: '<App/>',
        components: { App },
        store
    })

    unsubscribe()
})
