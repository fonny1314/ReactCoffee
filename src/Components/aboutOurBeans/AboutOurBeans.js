import img from './../../img/aboutOurBeans.svg'
import AboutBlock from '../readyBlocks/aboutBlocks/aboutBlock';
import UnderLine from '../readyBlocks/underLine/underLine';

// Добавление стилей
import './../../index.scss';

const AboutOurBeans = () => {
	return ( 
		<main className="aboutOurBeans">
				{AboutBlock({titleContentForAbout: 'About our beans', textContentForAbout: 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.', offObject: 'none', textCenterContentForAbout: 'center', widthContentForAbout: '346px'}, img)}
				{UnderLine()}
		</main>
	 );
}
 
export default AboutOurBeans;