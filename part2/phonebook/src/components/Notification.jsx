import './notification.css'

const Notification = ({ message, classcss='error' }) => {
  if (message === null) return null
  return (
    <div className={classcss}>
      {message}
    </div>
  )
}

export default Notification