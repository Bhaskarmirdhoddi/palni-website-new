import { layoutRegistry } from './registry'

export default function ConfiguredPage({ configuration }) {
  const Layout = layoutRegistry[configuration?.layout]
  if (!configuration || !Object.hasOwn(layoutRegistry, configuration.layout) || !Layout) {
    throw new Error('Unknown page layout')
  }
  return <Layout content={configuration.content} sections={configuration.sections} />
}
