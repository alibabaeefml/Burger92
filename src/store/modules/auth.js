import { ref } from "vue";
import { db } from '../DataBase/localStorage';

const state = {
  users: ref([]),
  signedIn: ref(null),
};

const getters = {
  allUsers: () => state.users.value,
  isLoggedIn: () => state.signedIn.value
};


const mutations = {
  syncUsers(state) {
    state.users = JSON.parse(db.users);
    state.signedIn = JSON.parse(db.signedIn);
  },
  addUser(state, user) {
    const users = state.users;
    users.push(user);
    db.users = JSON.stringify(users);
  },
  setSignedIn(state, user) {
    state.signedIn = user;
    db.signedIn = JSON.stringify(user);
    alert(`Signed in as ${user.email}`);
  },
  signOut(state) {
    alert(`Signed out from account: ${state.signedIn.email}`)
    db.signedIn = state.signedIn = null;
  },
};


const actions = {
  signUp({ commit, dispatch }, user) {
    commit("addUser", user);
    commit("setSignedIn", user);
  },
  signIn({ commit }, user) {
    const users = state.users.value;
    for (let item in users) {
      const foundUser = users[item];
      if (foundUser.email == user.email && foundUser.password == user.password) {
        commit("setSignedIn", foundUser);
        return
      }
    }
    alert('No users found.')
  },
  signOut({ commit }) {
    commit("signOut");
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
