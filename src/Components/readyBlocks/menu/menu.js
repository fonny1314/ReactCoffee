import './menu.scss';
import '../../../index.scss';


import logotypeMainBlackLogo from './../../../img/blackLogo.svg';


const Menu = (objectMenu, url, objectCoffee) => {

		const {positionMenu, topMenu, leftMenu, colorMenu, screenMenu} = objectMenu;
		const {positionCoffee, upCoffee, leftCoffee} = objectCoffee;

    return (
			<div className="menu__wrapper">
				<img src={url} alt="" className="menu__img_coffee"

							style={{position: positionCoffee, top: upCoffee, left: leftCoffee}}/>

                <ul className="menu__links"
										style={{position: positionMenu, top: topMenu, left: leftMenu}}>

                    <li className="menu__link"><a href=""
										style={{color: colorMenu}}>Coffee house</a></li>

                    <li className="menu__link"><a href=""
										style={{color: colorMenu}}>Our coffee</a></li>

                    <li className="menu__link"><a href=""
										style={{color: colorMenu}}>For your pleasure</a></li>
                </ul>
								
				<div className="menu__img_logo">
					<img src={logotypeMainBlackLogo} 
						alt="" 
						style={{display: screenMenu}}/>
				</div>
			</div>
    )
}
 
export default Menu;

