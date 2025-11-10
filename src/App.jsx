import { useState } from 'react'
import './App.css'
import './profile-card-template.css'
import Navbar from './navbar'
import ProfileCardTemplate from './profile-card-template.jsx'
import CardTemp from './profile-card-template-2.jsx'
import './profile-card-template-2.css'
import Select from 'react-select'


function App() {
  const [count, setCount] = useState(0)
  // options for the searchable select in the header filters
  const options = [
    { value: 'all', label: 'All Professionals' },
    { value: 'soil-scientist', label: 'Soil Scientist' },
    { value: 'agronomist', label: 'Agronomist' },
    { value: 'researcher', label: 'Researcher' },
  ]
  const [selected, setSelected] = useState(null)
  const [inputValue, setInputValue] = useState('')

  const handleSelect = (option) => {
    setSelected(option)
    // TODO: wire this to actually filter the listing
    console.log('Selected filter:', option)
  }

  const handleInputChange = (value, { action }) => {
    // update local input state so we can control when the menu opens
    setInputValue(value)
  }

  // only show options that match the typed input (case-insensitive)
  const filteredOptions = inputValue
    ? options.filter((o) => o.label.toLowerCase().includes(inputValue.toLowerCase()))
    : []

  return (
    <>
      <div className="responsive-container">
        <div className='main'>
          <div className="nav-cont">
            <Navbar /> 
          </div>
          <div className="body">
            <div className="section-1">
              <div className="container">
                <h1>National <b>Directory</b></h1>
                <p>of Soil Science Professionals</p>
                <div className="actions">
                  <button className='primary'>Explore Directory</button>
                  <button className='secondary'>Get Listed</button>
                </div>
                
              </div>
            </div>
            <div className="section-2">
              <div className="section-header">
                <div className="section-title">
                  <h3>Listed Professionals</h3>
                  <h4 id='no-of-professionals'>49 Professionals Found</h4>
                </div>
                <div className="filters">
                  <div className='search-conatiner'>
                    <Select
                      options={filteredOptions}
                      value={selected}
                      onChange={handleSelect}
                      onInputChange={handleInputChange}
                      inputValue={inputValue}
                      placeholder="Search or filter..."
                      isClearable
                      // don't open on focus or click; only open when user types
                      openMenuOnFocus={false}
                      openMenuOnClick={false}
                      menuIsOpen={inputValue.length > 0}
                      // hide the dropdown indicator (chevron)
                      components={{ DropdownIndicator: () => null }}
                      noOptionsMessage={() => (inputValue ? 'No matches' : null)}
                    />
                  </div>
                </div>
              </div>
              <div className="listing">
                <ProfileCardTemplate />
                <ProfileCardTemplate />
                <ProfileCardTemplate />
                <CardTemp />
                <CardTemp />
                <CardTemp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
