import Menu from '../readyBlocks/menu/menu';


// Импорт моих картинок
import backgroundHeader from './../../img/BackgroundImg.jpg';
import logotypeHeaderCoffee from './../../img/logo.svg';
import smallWhiteCoffee from './../../img/whiteCoffee.png';

import './header.scss'
import './../../index.scss'


const Header = () => {

	return ( 
		<header className="header">
			{Menu ({positionMenu: 'absolute', topMenu: '0px', leftMenu: '180px', colorMenu: '#FFF', screenMenu: 'none'}, 
			smallWhiteCoffee, {positionCoffee: 'absolute', upCoffee: '-30px', leftCoffee: '149px'})};

					<div className="header__content">
							<h1 className="header__title">Everything You Love About Coffee</h1>
							<img src={logotypeHeaderCoffee} alt="" />
							<h2 className="header__subtitle">We makes every day full of energy and taste</h2>
							<h3 className="header__text">Want to try our beans?</h3>
							<a href="#" className="header__botton">More</a>
					</div>

			<div className="header__background"><img src={backgroundHeader} alt="" /></div>
		</header>
	 );
}
 
export default Header;
