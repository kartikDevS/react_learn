import React from 'react'
import Card from './components/card'
const App = () => {
  return (
    <div class='parent'>
      <Card user='Ajay' age='19' img='https://th.bing.com/th/id/OIP.c0hJ1E1y3FsXLl1icHBMdwHaEI?w=188&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3'/>
      <Card user='Majay' age='29' img='https://tse1.mm.bing.net/th/id/OIP.ElkIYKmryLyD8QEu-ntqIwHaEK?pid=ImgDet&w=178&h=100&c=7&dpr=1.5&o=7&rm=3'/>
      <Card user='Vijay' age='39' img='https://tse2.mm.bing.net/th/id/OIP.tKVjaMtIIW69Ohvunpg58AHaEA?pid=ImgDet&w=178&h=96&c=7&dpr=1.5&o=7&rm=3'/>
    </div>
  )
}

export default App
