import React from "react";
import searchbarData from "../data/searchbarData";
let {genders, sizes, colors, styles} = searchbarData

class SearchBar extends React.Component { 
    
  constructor(props) {
    
    super(props);

    this.state = {
        genderVal: ' ',
        styleVal: ' ', 
        sizeVal: ' ',
        colorVal: ' '  
    }

    this.changeHandler = this.changeHandler.bind(this)
    this.submit = this.submit.bind(this)
  }  
  
  changeHandler = (event) => { 

    const target = event.target
    const value = target.value 
    const name = target.name 
        
    this.setState({ 
      //computed property
      [name] : value   
    })        
  }

  submit = event => {
    
    event.preventDefault()

    let tempVal = {    

      genderVal: this.state.genderVal,
      styleVal: this.state.styleVal, 
      sizeVal: this.state.sizeVal,
      colorVal: this.state.colorVal,
    }

               
    console.log(tempVal.genderVal)

  }
  
  render(){

    return (
      <aside id="search_category">

          <form id="search_category_form" onSubmit={this.submit}>

              <label>{this.props.labelname}</label> 

              <select 
                name="genderVal"
                value={this.state.genderVal}                
                placeholder={genders[0].placeholder}               
                onChange={this.changeHandler}
              >               
                  {                            
                      genders[0].options.map(option => 
                          <option 
                            value={option.value} 
                            key={option.id}                          
                          >
                              {option.displayValue}

                          </option>
                      )
                  }  
              </select>

              <select 
                name="styleVal"
                value={this.state.styleVal} 
                onChange={this.changeHandler} 
                placeholder={styles[0].placeholder}
                
              >
              {
                  styles[0].options.map(option => 
                      <option 
                        value={option.value} 
                        key={option.id}
                      >
                          {option.displayValue}
                      </option>
                  )
              }  
              </select>

              <select 
                name="sizeVal" 
                value={this.state.sizeVal} 
                onChange={this.changeHandler} 
                placeholder={sizes[0].placeholder}
              >
                  {
                      sizes[0].options.map(option => 
                          <option 
                            value={option.value} 
                            key={option.id}
                          >
                              {option.displayValue}
                          </option>
                      )
                  }                        
              </select>

              <select 
                name="colorVal"
                value={this.state.colorVal} 
                onChange={this.changeHandler} 
                placeholder={colors[0].placeholder}
              >
                  {
                      colors[0].options.map(option => 
                          <option 
                            value={option.value} 
                            key={option.id}
                          >
                              {option.displayValue}
                          </option>
                      )
                  }
              </select>
         
              
              <button name="find" className="search_category_btn" type="submit">Go</button>
          </form>
      </aside>

  );

  }
          
        
   
}

export default SearchBar;

