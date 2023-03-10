import './../../index.scss';
import aboutItCoffeeImg from './../../img/AboutItCoffee.jpg';

import AboutBlock from '../readyBlocks/aboutBlocks/aboutBlock';

const AboutItCoffee = () => {
	return (
		<main className="aboutOurBeans">{AboutBlock({titleContentForAbout: 'About it', textContentForAbout: 'Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}, aboutItCoffeeImg)}</main>
	  );
}
 
export default AboutItCoffee;