import React from 'react'

// const Hero = (props) -> props example1
// const Hero = ({title, sub})  -> props example2
// const Hero = ({title='Become a React Dev', sub='Find your React Job'})   -> Default props

const Hero = ({title='Become a React Dev', sub='Find your React Job'}) => {
  return (
    <>
    <section className="bg-indigo-700 py-20 mb-4">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            {/* {props.title}        props example1 */}
            {title}
          </h1>
          <p className="my-4 text-xl text-white">
            {/* {props.sub}      props example1*/}
            {sub}
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero