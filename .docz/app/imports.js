export const imports = {
  'src/molecules/Button/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-molecules-button-button" */ 'src/molecules/Button/Button.mdx'),
  'src/molecules/Card/Card.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-molecules-card-card" */ 'src/molecules/Card/Card.mdx'),
}
