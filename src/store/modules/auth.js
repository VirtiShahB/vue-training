const state = {
  loggedInVuex: JSON.parse(localStorage.getItem("loggedInUser")) ? true : false,
  fetchUser: JSON.parse(localStorage.getItem("loggedInUser")),
  allUsers: [],
};

const getters = {
  loggedInVuex: (state) => state.loggedInVuex,
  fetchLoginUser: (state) => state.fetchUser,
  fetchAllUsers: (state) => state.allUsers,
};

const actions = {
  setLoggedInStatus({ commit }) {
    commit("setLoggedInStatus", 20);
  },

  getAllUsers({ commit }) {
    let users = JSON.parse(localStorage.getItem("registerUsers"));
    users != null && users.length > 0 ? users : [];
    commit("getAllUsers", users);
  },

  createLoginUser({ commit }, user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    commit("setLoginUser", user);
    commit("setLoggedInStatus", true);
  },

  registerUser({ commit, getters }, newUser) {
    let users = getters.fetchAllUsers;

    users != null && users.length > 0 ? users : [];

    users.push(newUser);

    localStorage.setItem("registerUsers", JSON.stringify(users));

    commit("getAllUsers", users);
  },
};

const mutations = {
  getAllUsers: (state, users) => (state.allUsers = users),
  setLoginUser: (state, user) => (state.fetchUser = user),
  setLoggedInStatus: (state, status) => (state.loggedInVuex = status),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
