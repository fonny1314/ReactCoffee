import './footerBlock.scss';
import Menu from '../menu/menu';
import './../../../index.scss';

import blackCoffeeFooter from './../../../img/smallBlackCoffee.svg'

const FooterBlock = () => {
	return ( 
		<div className="footer__wrapper">
			{Menu ({positionMenu: 'absolute', leftMenu: '40%' , colorMenu: '#000', screenMenu: 'none'}, blackCoffeeFooter, {positionCoffee: 'relative', upCoffee: '-27px', leftCoffee: '542px' })};
		</div>
	 );
}
 
export default FooterBlock;