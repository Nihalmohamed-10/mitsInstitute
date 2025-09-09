import React from 'react'
import Spotlight from '../components/Spotlight'
import About from '../components/About'
import CoursesCategories from '../components/CoursesCategories'
function Home() {
  return (
    <div>
        <Spotlight/>
        <About/>
        <CoursesCategories/>
    </div>
  )
}

export default Home