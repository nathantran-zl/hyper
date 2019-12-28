export const availableExtensions = new Set([
  'onApp',
  'onWindowClass',
  'decorateWindowClass',
  'onWindow',
  'onRendererWindow',
  'onUnload',
  'decorateSessionClass',
  'decorateSessionOptions',
  'middleware',
  'reduceUI',
  'reduceSessions',
  'reduceTermGroups',
  'decorateBrowserOptions',
  'decorateMenu',
  'decorateTerm',
  'decorateHyper',
  'decorateHyperTerm', // for backwards compatibility with hyperterm
  'decorateHeader',
  'decorateTerms',
  'decorateTab',
  'decorateNotification',
  'decorateNotifications',
  'decorateTabs',
  'decorateConfig',
  'decorateKeymaps',
  'decorateEnv',
  'decorateTermGroup',
  'decorateSplitPane',
  'getTermProps',
  'getTabProps',
  'getTabsProps',
  'getTermGroupProps',
  'mapHyperTermState',
  'mapTermsState',
  'mapHeaderState',
  'mapNotificationsState',
  'mapHyperTermDispatch',
  'mapTermsDispatch',
  'mapHeaderDispatch',
  'mapNotificationsDispatch'
]);