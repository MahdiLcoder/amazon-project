class Product {
    id;
    image;
    name;
    rating;
    priceCents;
    constructor(productDetails){
        this.id = productDetails.id;
        this.image = productDetails.image;
        this.name = productDetails.name;
        this.rating = productDetails.rating;
        this.priceCents = productDetails.priceCents;
    }
    getSizeChartLink(){
        return '';
    }
}

class Clothing extends Product {
    sizeChartLink;
    constructor(productDetails){
        super(productDetails);
        this.sizeChartLink = productDetails.sizeChartLink;
    }
    getSizeChartLink(){
        return `<a href="${this.sizeChartLink}" target="_blanck">sizeCharLink</a>`;
    }

}

export const products = [{
    id : "product1",
	image : 'images/main/athletic-cotton-socks-6-pairs.jpg',
	name : 'Black and Gray athletic cotton-socks-6-pairs.jpg',
	rating : {
		stars : 4.5,
        count : 87
	},
	priceCents : 1090
},{
    id : "product2",
	image : 'images/main/intermediate-composite-basketball.jpg',
    name : 'Intermediate Size Basketball',
    rating : {
        stars : 0.4,
        count : 127
    },
    priceCents : 2095
},{
    id : "product3",
	image : 'images/main/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name : 'Adults Plain Cotton T-Shirt - 2 Pack',
    rating : {
        stars : 4.5,
        count : 56
    },
    priceCents : 799,
    sizeChartLink: "images/main/clothing-size-chart.png",
    type : 'clothing'
},{
    id : "product4",
	image : 'images/main/black-2-slot-toaster.jpg',
    name : '2 Slot Toaster  - Black',
    rating : {
        stars : 0.5,
        count : 2197
    },
    priceCents : 1899,
},{
    id : "product5",
	image : 'images/main/6-piece-non-stick-baking-set.webp',
    name : '6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set',
    rating : {
        stars : 4.5,
        count : 175
    },
    priceCents : 3499
},{
    id : "product6",
	image : 'images/main/6-piece-white-dinner-plate-set.jpg',
    name : '6-piece-white-dinner-plate-set',
    rating : {
        stars : 0.4,
        count : 37
    },
    priceCents : 2067
},{
    id : "product7",
	image : 'images/main/non-stick-cooking-set-15-pieces.webp',
    name : 'Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces',
    rating : {
        stars : 4.5,
        count : 511
    },
    priceCents : 6797
},{
    id : "product8",
	image : 'images/main/vanity-mirror-silver.jpg',
    name : 'Vanity Mirror with Heavy Base - Chrome',
    rating : {
        stars : 4.5,
        count : 130
    },
    priceCents : 1649
},{
    id : "product9",
	image : 'images/main/women-chunky-beanie-gray.webp"',
    name : 'Womens Chunky Cable Beanie - Gray',
    rating : {
        stars : 0.5,
        count : 83
    },
    priceCents : 1250
},{
    id : "product10",
	image : 'images/main/coffeemaker-with-glass-carafe-black.jpg',
    name : 'Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black',
    rating : {
        stars : 4.5,
        count : 1211
    },
    priceCents : 2250
},{
    id : "product11",
	image : 'images/main/blackout-curtains-black.jpg',
    name : 'Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels',
    rating : {
        stars : 4.5,
        count : 363
    },
    priceCents : 3099
},{
    id : "product12",
	image : 'images/main/electric-glass-and-steel-hot-water-kettle.webp',
    name : 'Countertop Blender - 64oz, 1400 Watts',
    rating : {
        stars : 0.4,
        count : 3
    },
    priceCents : 10747
}].map((productDetails)=>{
    if(productDetails.type === 'clothing'){
        return new Clothing(productDetails);
    }else{
        return new Product(productDetails);
    }
});