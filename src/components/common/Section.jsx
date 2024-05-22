import React from 'react'

const Section = ({ date, dateTitle, dateTitleTitle, title, content }) => {
  return (
    <section className='section'>
      <div className='section-head'>
        <small>{date}</small>
        <small>{dateTitle}</small>
      </div>
      <div className="section-body">
        <details>
          <summary>
            <h2>{dateTitleTitle}</h2>
          </summary>
          <h3>{title}</h3>
          <article className='section-content'>
            {content}
          </article>
        </details>
      </div>
    </section>
  )
}

export default Section