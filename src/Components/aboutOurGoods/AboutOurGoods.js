import img from './../../img/aboutOurGoods.svg'

import AboutBlock from '../readyBlocks/aboutBlocks/aboutBlock';
import UnderLine from '../readyBlocks/underLine/underLine';


// Добавление стилей
import './../../index.scss';

const AboutOurGoods = () => {
	return ( 
		<main className="aboutOurBeans">
			{AboutBlock({titleContentForAbout: 'About our goods', textContentForAbout: 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feelmet spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.', offObject: 'none', textCenterContentForAbout: 'center', widthContentForAbout: '346px'}, img)}
			{UnderLine()}
		</main>
	 );
}
 
export default AboutOurGoods;