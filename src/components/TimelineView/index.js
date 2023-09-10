// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="timeline-view">
      <p className="paragraph-title">MY JOURNEY OF</p>
      <h1 className="main-heading">CCBP 4.0</h1>

      <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
        <div className="chrono-container">
          {timelineItemsList.map(timeLineItem => {
            if (timeLineItem.categoryId === 'COURSE') {
              return (
                <CourseTimelineCard
                  timeLineItem={timeLineItem}
                  key={timeLineItem.id}
                />
              )
            }
            return (
              <ProjectTimelineCard
                timeLineItem={timeLineItem}
                key={timeLineItem.id}
              />
            )
          })}
        </div>
      </Chrono>
    </div>
  )
}

export default TimelineView
