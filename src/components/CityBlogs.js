import React from 'react'

const BlogCard = (props) => {
    function handleClick(link) {
        window.open(`${link}`, '_blank', 'noopener,noreferrer');
      }
    return(
            <div className='blog_card' onClick={()=>{handleClick(props.link)}} >
                <lable className='blog_title' > {props.title} </lable>
                <lable className="posted_by" >Posted by: {props.by} </lable>
            </div>
    )
}

const CityBlogs = ({city}) => {
  return (
    <div className='city_landing'>
        <lable className='blog_heading'>See what people are writing about {city}</lable>
        <div className='blog_container' >
            <BlogCard title={'Bandra West- BLOG - RACHEL KING'}
             by={'rachelkingcreative'}
             link={'https://www.rachelkingcreative.com/blog/tag/Bandra+West'}/>
            <BlogCard title={'Exploring Mumbai: A Day in Bandra'} 
            by={'ToursByLocals'}
            link={'https://www.toursbylocals.com/blog/mumbai-day-in-bandra'} />
            <BlogCard title={'Bandra West - A Harmonious blend of tradition and Modernity in Mumbai’s Cultural Hub'}
            by={'jugyah.com'}
            link={'https://jugyah.com/blogs/guides/bandra-west-neighborhood-guide'} />
            <BlogCard title={'BANDRA FORT: AN UNEXPECTED MID-WEEK TREAT'} 
            by={' sudhagee'}
            link={'https://sudhagee.com/2010/06/02/bandra-fort/'} />
            <BlogCard title={'Bandra – Then and Now'} 
            by={'Nicole Herbert Dean'}
            link={'https://blogs.transparent.com/hindi/bandra-then-and-now/'} />
            <BlogCard title={'Exploring Bandra Street Art'} 
            by={'Ramda'}
            link={'https://www.ramadaplaza-juhu.com/blogs/exploring-bandra-street-art.html'} />
        </div>
    </div>
  )
}

export default CityBlogs