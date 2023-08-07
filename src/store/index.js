import { createStore } from "vuex";

import coachesModule from './modules/coaches/index.js';
import requestsModeule from './modules/requests/index.js';


const store = createStore({
    modules: {
        coaches: coachesModule,
        requests: requestsModeule
    },
    state() {
        return {
            userId: 'c3'
        };
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
});

export default store;