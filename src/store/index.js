import { createStore } from "vuex";
import axios from "axios";
import popups from "./modules/popups";

export default createStore({
  state: {
    rating: [],
  },
  getters: {
    rating(state) {
      return state.rating;
    },
  },
  mutations: {
    setRating(state, val) {
      state.rating = val;
    },
  },
  actions: {
    getData(ctx) {
      return axios.get("/data.json").then((res) => {
        console.log(res.data);
        ctx.commit("setRating", res.data.rating);
      });
    },
  },
  modules: {
    popups,
  },
});
