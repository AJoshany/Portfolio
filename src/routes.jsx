import Home from './Components/Home/Home'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Resume from './Components/Resume/Resume'

let routes = [
    { path: '/', element: <Home /> },
    { path: '/skills', element: <Skills /> },
    { path: '/projects', element: <Projects /> },
    { path: '/resume', element: <Resume /> }
]

export default routes