
// Компоненты
import Header from '../header/Header'
import AboutUs from '../aboutUs/AboutUs'
import Offers from '../offers/Offers'
import Footer from '../footer/Footer'
import OurCoffe from '../ourCoffee/OurCoffee'
import AboutOurBeans from '../aboutOurBeans/AboutOurBeans'
import FooterTwo from '../footerTwo/FooterTwo'
import OurCoffee_two from '../ourCoffee_two/OurCoffee_two'
import AboutItCoffee from '../aboutItCoffee/AboutItCoffee'
import FooterThree from '../footerThree/FooterThree'
import ForYourPleasure from '../forYourPleasure/ForYourPleasure'
import AboutOurGoods from '../aboutOurGoods/AboutOurGoods'
import FooterFour from '../footerFour/FooterFour'
import Items from '../readyBlocks/cardsWithoutFilters/items'

import React from 'react'

// Обнуление
import '../../index.scss'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			items: [
				{id: 1, rise: false, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$'},
				{id: 2, rise: true, name:  'AROMISTICO Coffee 1 kg', country: 'Kenya', price: '6.99$'},
				{id: 3, rise: false, name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99$'},
				{id: 4, rise: false, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$'},				
				{id: 5, rise: false, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$'},				
				{id: 6, rise: false, name: 'KROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$'}
			], 
			term: '',
		}
	}

	searchCountry = (items, term) => {
		if (term.lenght === 0) {
			return items;
		}

		return items.filter(item => {
				return item.country.indexOf(term) > -1;
		})
	}

	onUpdateSearch = (term) => {
		this.setState({term});
	}
 
	render() {
		const {items, term} = this.state;
		const dataItems = this.searchCountry(items, term);

		return (
			<>
				<Header/>
				<AboutUs/>
				<Offers/>
				<Footer/>
				<OurCoffe/>
				<AboutOurBeans/>
				<Items 
				items={dataItems}
				onUpdateSearch={this.onUpdateSearch} 
				/>
				<FooterTwo/>
				<OurCoffee_two/>
				<AboutItCoffee/>
				<FooterThree/>
				<ForYourPleasure/>
				<AboutOurGoods/>
				<FooterFour/>
			</>
		);
	}
}

export default App;
