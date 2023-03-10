import '../../../index.scss';
import './aboutBlock.scss'
import blackCoffe from './../../../img/blackLogo.svg'


const AboutBlock = (objectContent, img) => {
	const {titleContentForAbout, textContentForAbout, offObject, textCenterContentForAbout, widthContentForAbout} = objectContent;

	return ( 
		<main className="aboutBlock">
					<div className="aboutBlock__wrapper container">
					<img src={img} alt="" className="aboutBlock__img"/>
						<div className="aboutBlock__content">
								<h2 className="aboutBlock__title">{titleContentForAbout}</h2>
								<img src={blackCoffe} alt="" className="aboutBlock__coffe" />
									<p className="aboutBlock__country" style={{display: offObject}}><span>Country:</span>Brasil</p>
									<p className="aboutBlock__text" style={{textAlign: textCenterContentForAbout, maxWidth: widthContentForAbout}}>{textContentForAbout}</p>
									<div className="aboutBlock__price" style={{display: offObject}}><span>Price:</span><b>16.99$</b></div>
						</div>
					</div>
	</main>
	);
}
 
export default AboutBlock;