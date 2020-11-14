import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    key: '_IS_RM_BHI_MKL001879',
    storage: window.localStorage
  }).plugin(store)
}
