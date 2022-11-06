import './index.css'

const TabItem = props => {
  const {eachTab, onSelectTabItem, isActive} = props
  const {displayText, tabId} = eachTab

  const onSelectTab = () => {
    onSelectTabItem(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab' : ''

  return (
    <li className="tab-item">
      <button
        onClick={onSelectTab}
        type="button"
        className={`button ${activeTabClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
