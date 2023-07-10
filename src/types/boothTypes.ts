export interface BoothService {
	id: number;
	boothID: 'digitalBooth' | 'premiumBooth' | 'mirrorBooth';
	name: string;
	description: string;
	imagePath: string;
	linkPath: string;
	basePrice: number;
 }
 
 export interface BoothFeature {
	id: number;
	applicableBooths: ['digitalBooth' | 'premiumBooth' | 'mirrorBooth']
	featureType: 'included' | 'optional';
	imagePath: string;
	 description: string;
	 price: number;
 }
 
 