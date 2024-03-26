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

const CityBlogs = () => {
  return (
    <div className='city_landing'>
        <lable className='blog_heading'>See what people are writing about Andheri</lable>
        <div className='blog_container' >
            <BlogCard title={'6 Reasons Why Andheri Is the Best Place to Live in Mumbai'}
             by={'IndexTap'}
             link={'https://www.indextap.com/blog/6-reasons-why-andheri-is-the-best-place-to-live-in-mumbai/'}/>
            <BlogCard title={'Andheri: The Backbone of Mumbai Suburbs'}
            by={'blox.xyz'}
            link={'https://blox.xyz/blog/andheri-the-backbone-of-mumbai-suburbs'} />
            <BlogCard title={'Andheri East - The Business Beat of Mumbai'} 
            by={'jugyah.com'}
            link={'https://jugyah.com/blogs/andheri-east-neighborhood-guide'} />
            <BlogCard title={'ANDHERI WEST OR ANDHERI EAST: UNRAVELING THE BEST SUBURBAN LIVING OPTIONS IN MUMBAI’S HEARTBEAT'} 
            by={'PropertyOk'}
            link={'https://www.propertyok.com/blog/andheri-west-or-andheri-east/'} />
            <BlogCard title={'Andheri: The Emerging Corporate Hub of Mumbai'} 
            by={'Adani Reality'}
            link={'https://www.adanirealty.com/blogs/andheri-the-emerging-corporate-hub-of-mumbai'} />
            <BlogCard title={'Everything you need to know about Andheri East, Mumbai'} 
            by={'Mygate'}
            link={'https://mygate.com/blog/neighbourhood/andheri-east/'} />
        </div>
    </div>
  )
}

export default CityBlogs