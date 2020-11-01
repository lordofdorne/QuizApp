import React from 'react'

const Stats = (props) => {
  console.log('PROPS', props)
  // const  stats  = props

  return (
    <div>
      {
        (props.stats.length === 0)
          ? <h1>Please Play Atleast One Round To See Your Results</h1>

          : props.stats.map(stat => {
            return (
              <h1>{stat}</h1>
            )
          })

      }
    </div>
  )

}

export default Stats