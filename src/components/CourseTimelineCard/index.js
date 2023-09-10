// Write your code here
const CourseTimelineCard = props => {
  const {timelineItem} = props
  console.log(timelineItem)
  const {courseTitle, description, tagsList} = timelineItem
  return (
    <div className="course-card">
      <div className="heading-container">
        <h1>{courseTitle}</h1>
      </div>
    </div>
  )
}

export default CourseTimelineCard
