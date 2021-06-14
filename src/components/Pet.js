import React from 'react'

class Pet extends React.Component {
  //Rendering props:
  //  Should render name, the correct gener icon for male and female pets 
  //  SHould render pet type, age, weight 
  //Adopting a pet 
  //  Pet is not adopted yet 
  //    Should only show the adopt button 
  //    Should call the 'onAdoptPet' cb prop when the adopt button is clicked 
  //    Should call the 'onAdoptPet' cb prop with the pet Id 
  //  Pet is already Adopted
  //    Should only show the already adopted button 
  //    Should pass an 'onAdoptPet' callback prop to its children Pet components
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.props.pet.name}{' '}
            {this.props.pet.gender === 'female' ? '♀' : '♂' }
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>{this.props.pet.age}</p>
            <p>{this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
          <button 
            onClick={() => this.props.onAdoptPet(this.props.pet.id)}
            className="ui primary button">
              Adopt pet
          </button>
          )}
        </div>
      </div>
    )
  }
}

export default Pet
