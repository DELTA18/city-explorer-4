import '../../styles/sidebar.css'

const Hotelfilters = ( {type, selectedType, city, cityname, selectedCity, handlefilters} ) => {
  
  const handleprice = () => {
    let a = parseInt(document.getElementById('range').value)
    let b = document.getElementById('rangedisplay')
    b.innerHTML = a
    handlefilters(a,'price')
  }
  const handlesortedprice = () => {
    let radio = document.getElementsByName('sortprice')
    if(radio[0].checked)
    {
      handlefilters(parseInt(radio[0].value), 'sortprice')
    }
    if(radio[1].checked)
    {
      handlefilters(parseInt(radio[1].value), 'sortprice')
    }
    if(radio[2].checked)
    {
      handlefilters(parseInt(radio[2].value), 'sortprice')
    }
  }

  const handlevej = () => {
    let radio = document.getElementsByName('vej')
    if(radio[0].checked)
    {
      handlefilters(parseInt(radio[0].value), 'vej')
    }
    if(radio[1].checked)
    {
      handlefilters(parseInt(radio[1].value), 'vej')
    }
    if(radio[2].checked)
    {
      handlefilters(parseInt(radio[2].value), 'vej')
    }
  }

  return (
    <section className='sidebar'>
        {/* <h4>hotel filters</h4> */}
        <section>
          <label>category:</label>
          {
            type.map( (type) => {
              return(
                <>
                  <div className={ `hotel-filter-checkbox ${selectedType.includes(type) ? 'active' : ''}` }
                   onClick={ () => handlefilters(type,'type')} > {type} </div>
                </>
              )
            } )
          }
          <hr className='hotel-filters-hr'/>

          <label>city:</label>
          {
            city.map( (type) => {
              return(
                <>
                  <div className={ `hotel-filter-checkbox ${selectedCity.includes(type) || type === cityname ? 'active' : ''}` } 
                  onClick={ () => handlefilters(type,'city')} > {type} </div>
                </>
              )
            } )
          }
          <hr className='hotel-filters-hr'/>

          <label>price:</label>
          <input type='range' name='range' id='range' min={0} max={10000} onChange={ handleprice }/>
          <div id='rangedisplay'>0</div>
          <label>Sort by:</label>
        <div>
          <input type='radio' name='sortprice' id='sortprice-radio' className='sortprice-radio' value={1} onClick={ handlesortedprice } />low-to-high<br/>
          <input type='radio' name='sortprice' id='sortprice-radio' className='sortprice-radio' value={2} onClick={ handlesortedprice } />high-to-low<br/>
          <input type='radio' name='sortprice' id='sortprice-radio' className='sortprice-radio' value={0} onClick={ handlesortedprice } />random
        </div>
        <hr className='hotel-filters-hr'/>
        <label>vej-nonvej</label><br/>
        <input type='radio' name='vej' id='vej' className='vej' value={0} onClick={ handlevej } />All<br/>
        <input type='radio' name='vej' id='vej' className='vej' value={1} onClick={ handlevej } />Vej<br/>
        <input type='radio' name='vej' id='vej' className='vej' value={2} onClick={ handlevej } />Non-Vej<br/>
        <hr className='hotel-filters-hr'/>
        </section>
    </section>
  )
}

export default Hotelfilters