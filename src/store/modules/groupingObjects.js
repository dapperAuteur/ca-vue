import companies from '../../data/companies';
import cost_proposals from '../../data/cost_proposals';
import employees from '../../data/employees';
import film_quotes from '../../data/film_quotes';
import film_specs from '../../data/film_specs';
import offices from '../../data/offices';
import opportunities from '../../data/opportunities';
import store from '../store';

const state = {
  officesByCompany: [],
  employeesByOffice: [],
  filmSpecsByOpportunities: [],
  filmQuoteByFilmSpec: [],
  filmQuoteByOpportunity: [],
  costProposalByOpportunity: [],
  costProposalByFilmSpec: [],
  costProposalByFilmQuote: [],
  companies: [],
  offices: []
}

const mutations = {
  'SET_OFFICES_BY_COMPANY' (state, offices, companies, officesByCompany) {
    for(var j = 0; j < companies.length; j++) {
      console.log(companies[j].id);
      console.log(offices[j].company_id);
      companies[j].offices = [];
      var companiesJ = [companies[j]];
      console.log(companiesJ);
      for(var i = 0; i < offices.length; i++) {
        if(offices[i].company_id === companies[j].id) {
          companies[j].offices.push(offices[i]);
          officesByCompany.push(companies[j]);
        }
      }
    }
  },
  'SET_OFFICES_BY_THIS_COMPANY' (state, offices, company, officesByCompany) {
    for(var i = 0; i < offices.length; i++) {
      if(offices[i].company_id === company.id) {
        officesByCompany.push(offices[i]);
      }
    }
  }
}

const getters = {
  officesByCompany: state => {
    return state.officesByCompany;
  }
}
