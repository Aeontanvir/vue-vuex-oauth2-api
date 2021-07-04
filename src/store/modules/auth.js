import api from '../../api/imgur'
import qs from 'qs';

const state = {
    token: window.localStorage.getItem('vs_test_app_token'),
}

const getters = {
    isLoggedIn: (state) => !!state.token,
}

const actions = {
    login: () => {
        api.login();
    },
    finalizeLogin: ({ commit }, hash) => {
        let query = qs.parse(hash.replace('#', ''));
        commit('setToken', query.access_token);
        window.localStorage.setItem('vs_test_app_token', query.access_token);
    },
    logout: ({ commit }) => {
        commit('setToken', null);
        window.localStorage.removeItem('vs_test_app_token');
    },

}

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
}