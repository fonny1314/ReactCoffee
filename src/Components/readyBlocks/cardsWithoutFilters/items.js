import React, { Component } from 'react'


import './cards.scss';
import './../../../index.scss';
import './filter.scss';

import cardsCoffe from './../../../img/cards__coffee.svg';



class Items extends Component {
	constructor(props) {
		super(props)
		this.state = {
			term: ''
		}
	}

	onUpdateSearch = (e) => {
		const term = e.target.value;
		this.setState({term});
		this.props.onUpdateSearch(term);
	}

	createCard = this.props.items.map(card => {
		
	 return (
		 <div className="goods__card">
				 <div className="goods__background"><img src={cardsCoffe} alt=""/></div>
				 <div className="goods__name">{card.name}</div>
				 <div className="goods__country">{card.country}</div>
				 <div className="goods__price">{card.price}</div>
			 </div>
	 )
 })
	render() { 
		return (
		<div className="cards">
			<div className="cards__filter filter__cards">
					<div className="filter__search">
						<p className="filter__text">Lookiing for</p>
						<input type="text" 
						 className="filter__input"
						 placeholder="start typing here..." 
						 value={this.state.term} 
						 onChange={this.onUpdateSearch}/>
					</div>
			<div className="filter__fust_search">
				<p className="filter__text_button">Or filter</p>
					<div className="filter__buttons">
							<button className="filter__button">Brazil</button>
							<button className="filter__button">Kenya</button>
							<button className="filter__button">Columbia</button>
					</div>
				</div>
		</div>
			<div className="cards__goods goods__cards">
				<div className="goods__wrapper">
					{this.createCard}
				</div>
			</div>
		</div>
		)
	}
}

export default Items;