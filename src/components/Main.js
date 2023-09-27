import React, { useState } from "react"
import Solution from "../funtions/Solution"
import data from "../funtions/data"

export default function Main() {
  const [selectedMenuItem, setSelectedMenuItem] = useState(0)

  const properties = data.map((item, index) => {
    function handleClick(){
      setSelectedMenuItem(index) 
    }

    return (
      <Solution
        key={item.id}
        title={item.title}
        customFunction={item.customFunction}
        link={item.link}
        code={item.code}
        onClick={handleClick}
      />
    )
  })

  const menuItems = data.map((item, index) => (
    <button
      key={item.id}
      onClick={() => setSelectedMenuItem(index)}
      className={selectedMenuItem === index ? "active" : ""}
    >
      {item.title}
    </button>
  ))

  return (
    <div className="Main">
      <aside>
        {menuItems}
      </aside>
      <section>
        {properties[selectedMenuItem]} 
      </section>
    </div>
  )
}
