import './index.css'

const Welcome = props => {
  const {name, greeting} = props
  return (
    <h1 className="message">
      {greeting}, {name}
    </h1>
  )
}

// Default Prop for Component
Welcome.defaultProps = {
  name: 'Rahul',
  greeting: 'Hi',
}

export default Welcome
