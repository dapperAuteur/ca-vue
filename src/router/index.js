import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Companies from '@/components/Company/Companies'
import Company from '@/components/Company/Company'
import CreateCompany from '@/components/Company/CreateCompany'
import CompanyDetails from '@/components/Company/CompanyDetails'
import CreateOffice from '@/components/Office/CreateOffice'
import Office from '@/components/Office/Office'
import Offices from '@/components/Office/Offices'
import OfficesByCompanyId from '@/components/Office/OfficesByCompanyId'
import OfficeDetails from '@/components/Office/OfficeDetails'
import Person from '@/components/Person/Person'
import Persons from '@/components/Person/Persons'
import Portfolio from '@/components/Portfolio/Portfolio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/companies',
      name: 'Companies',
      component: Companies
    },
    {
      path: '/companies/:id',
      name: 'Company',
      component: CompanyDetails
    },
    {
      path: '/companies/create-company',
      name: 'createCompany',
      component: CreateCompany
    },
    {
      path: '/offices',
      name: 'Offices',
      component: Offices
    },
    {
      path: '/offices/:id',
      name: 'Office',
      component: OfficeDetails
    },
    {
      path: '/offices-by-company/:company_id',
      name: 'CompanyId',
      component: OfficeDetails
    },
    {
      path: '/offices/create-office',
      name: 'createOffice',
      component: CreateOffice
    },
    {
      path: '/persons',
      name: 'Persons',
      component: Persons
    },
    {
      path: '/persons/:id',
      name: 'Person',
      component: Person
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    }
  ]
})
