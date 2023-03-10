import './../../index.scss';
import './ourCoffee.scss';
import coffee from './../../img/whiteCoffee.png';
import background from './../../img/ourCoffe__background.svg';

const OurCoffe = () => {
	return ( 
	<header className="ourCoffe">
		<div className="ourCoffe__wrapper">
			<nav className="ourCoffe__navigation">
				<ul className="ourCoffe__menu">
					<li className="ourCoffe__link"><a href="">Coffee house</a></li>
					<li className="ourCoffe__link"><a href="">Our coffee</a></li>
					<li className="ourCoffe__link"><a href="">For your pleasure</a></li>
				</ul>
			</nav>
			<div className="ourCoffe__title">Our Coffee</div>
			<img src={coffee} alt="" className="ourCoffe__img" />
		</div>
		<div className="ourCoffe__background"><img src={background} alt="" /></div>
	</header>
	);
}
 
export default OurCoffe;