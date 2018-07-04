import Home from './containers/Home.vue';
import Portfolio from './containers/Portfolio.vue';
import LoadingScreen from './components/Loading/LoadingScreen.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/loading', component: LoadingScreen },
  { path: '/portfolio', component: Portfolio }
//  {path: '*', component: PageNotFound}
];

export default routes
