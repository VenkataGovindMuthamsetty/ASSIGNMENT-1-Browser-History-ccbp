import './index.css'

const InitialHistoryDetails = props => {
  const {HistoryDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = HistoryDetails

  const onDeleteBtn = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-container">
      <p>{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" />
      <p>{title}</p>
      <p>{domainUrl}</p>
      <button data-testid="delete" type="button" onClick={onDeleteBtn}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default InitialHistoryDetails
