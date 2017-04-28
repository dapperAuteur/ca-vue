import offices from '../../data/stocks';

const state = {
  offices: [],
  office: {},
};

const mutations = {
  'SET_OFFICES' (state, offices) {
    state.offices = offices;
  },
  'SET_OFFICES_BY_ID' (state, offices) {
    state.offices.sort(function(a, b){
      return a.id - b.id;
    });
  },
  'SET_OFFICES_BY_COMPANYID' (state, offices) {
    state.offices.sort(function(a, b) {
      return a.company_id - b.company_id;
    });
  },
  'SET_OFFICE' (state, office) {
    state.office = office;
  }
};

const actions = {
  buyOffice: ({ commit}, order) => {
    commit('BUY_OFFICE', order);
  },
  initOffices: ({commit}) => {
    commit('SET_OFFICES', offices);
  },
  sortOfficeById: ({commit}) => {
    commit('SET_OFFICES_BY_ID');
  },
  sortOfficeByCompanyId: ({commit}) => {
    commit('SET_OFFICES_BY_COMPANYID');
  }
};

const getters = {
  offices: state => {
    return state.offices; //refers to offices array from state on line 4
  },
  office: state => {
    return state.office;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
