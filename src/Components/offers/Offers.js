import offersBackground from './../../img/offers__background.svg'
import offersSolimoCoffee from './../../img/offers__solimo_coffee.svg'
import offersPrestoCoffee from './../../img/offers__presto_coffee.svg'
import offersAromisticoCoffee from './../../img/offers__aromistico.svg'

import './offers.scss'

const Offers = () => {
	return ( 
		<div className="offers">
			<h2 className="offers__title">Our best</h2>
					<div className="offers__items">
						<div className="offer__card">
										<div className="offers__img"><img src={offersSolimoCoffee} alt=""/></div>
										<div className="offers__name">Solimo Coffee Beans 2 kg</div>
										<div className="offers__price">10.73$</div>
						</div>

						<div className="offer__card">
										<div className="offers__img"><img src={offersPrestoCoffee} alt=""/></div>
										<div className="offers__name">Presto Coffee Beans 1 kg</div>
										<div className="offers__price">15.99$</div>
						</div>

						<div className="offer__card">
										<div className="offers__img"><img src={offersAromisticoCoffee} alt=""/></div>
										<div className="offers__name">AROMISTICO Coffee 1 kg</div>
										<div className="offers__price">6.99$</div>
						</div>
					</div>

				<img src={offersBackground} alt="" className="offers__background" />
		</div>
	);
}
 
export default Offers;