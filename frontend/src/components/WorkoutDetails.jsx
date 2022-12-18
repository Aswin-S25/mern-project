const WorkoutDetails = ({ workout }) => {
  const handleClick = async () => {
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if(response.ok) {
      console.log(json)
    }
  }

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load: </strong>{workout.load}</p>
      <p><strong>Number of reps: </strong>{workout.reps}</p>
      <p>{workout.createdAt}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails