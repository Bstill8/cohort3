import React from 'react'
import 'C:/code/cohort-3/react-02/src/community.css'

class City extends React.Component{
    constructor(){
        super()
        this.textInput = React.createRef();
    }
    hemisphere(){
        if(this.props.latitude>=0){
            return 'Northern Hemisphere'
        }
        return 'Southern Hemisphere'
    }
    type(){
        if(this.props.population > 100000){return 'City'}
            if(this.props.population > 20000){return 'Large Town'}
            if(this.props.population > 1000){return 'Town'}
            if(this.props.population > 100){return 'Village'}
            return 'Hamlet'
    }
    render(){
        return(
            <div className="city">
                <h2 className="cityName">{this.props.name}</h2>
                <input type="text" placeholder="# to move" ref={this.textInput}/><br/>
                <button className="movedIn" onClick={async() => {return await this.props.update(this.textInput.current.value, this.props.id)}}>Move In</button>
                <button className="movedOut" onClick={async() => {return await this.props.update(-this.textInput.current.value, this.props.id)}}>Move Out</button><br/>
                <button className="button" onClick={async() => {return await this.props.delete(this.props.id)}}>Delete</button>
                <p>Latitude: {this.props.latitude}</p>
                <p>Longitude: {this.props.longitude}</p>
                <p>Population: {this.props.population}</p>
                <p> {this.hemisphere()}</p>
                <p>{this.type()}</p>
            </div>
        )
    }
}
export default City