import FeatureCard from '../composed/FeatureCard'

export default function ServicePrinciplesGrid({ items }) {
  return (
    <div className="service-principles">
      {items.map(item => <FeatureCard key={item.key} content={item.content} />)}
    </div>
  )
}
