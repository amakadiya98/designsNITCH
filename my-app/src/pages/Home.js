import ProductImg1 from '../assets/images/product-img-1.png'
import ProductImg2 from '../assets/images/product-img-2.png'
import ProductImg3 from '../assets/images/product-img-3.png'
import ProductImg4 from '../assets/images/product-img-4.png'
import Category1 from '../assets/images/category-1.png'
import Category2 from '../assets/images/category-2.png'
import Category3 from '../assets/images/category-3.png'
import Category4 from '../assets/images/category-4.png'
import MakerImg from '../assets/images/maker.png'
import MakerImgLeft from '../assets/images/maker-left.png'
import MakerImgRight from '../assets/images/maker-right.png'
import Pot from '../assets/images/pot.png'
import PromoImg1 from '../assets/images/promo-img-1.png'
import PromoImg2 from '../assets/images/promo-img-2.png'
import PromoImg3 from '../assets/images/promo-img-3.png'
import PotMaker from '../assets/images/pot-maker.png'
import Star from '../assets/images/Star.svg'
import BecomeMaker from '../assets/images/bcomeMaker.png'
import BecomeMakerLeft from '../assets/images/BecomeMakerLeft.png'

function Home() {
    return (
        <>
            {/* // Banner scetion */}
            <section className="banner-section">
                <div className="container mx-auto h-full">
                    <div className='banner-content'>
                        <h2>One-of-a-Kind Creations Stories You’ll Love</h2>
                        <p>Designsnitch is an online marketplace that uncovers unique pieces, their makers and the stories behind them.</p>
                        <div className='banner-button-part flex gap-[16px]'>
                            <button className='small-banner-btn yellow' pill>Shop our latest arrivals</button>
                            <button className='small-banner-btn black' pill>Shop all</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* // product section */}
            <section className='product-section common-spacing'>
                <div className='container mx-auto'>
                    <div className='section-title flex justify-between'>
                        <h6>Latest Products</h6>
                        <div className='browse-link'>
                            <a href='#' title='browse-all'>Browse all </a>
                        </div>
                    </div>
                    <div className='product-part'>
                        <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-y-[20px]">
                            <a href="#" title="product-name" className='product-item'>
                                <div className='product-image'>
                                    <img src={ProductImg1} alt='ProductImg1' />
                                </div>
                                <div className='product-info mt-3'>
                                    <h6 className='product-name'>Jug Vase</h6>
                                    <p className='product-price'><span className='line-through mr-2'>£500</span>£300</p>
                                    <p className='sold-by'>Sold by Maker 1</p>
                                </div>
                            </a>
                            <a href="#" title="product-name" className='product-item'>
                                <div className='product-image'>
                                    <img src={ProductImg2} alt='ProductImg1' />
                                </div>
                                <div className='product-info mt-3'>
                                    <h6 className='product-name'>Erya Cutting Board</h6>
                                    <p className='product-price'>£35</p>
                                    <p className='sold-by'>Sold by Maker 1</p>
                                </div>
                            </a>
                            <a href="#" title="product-name" className='product-item'>
                                <div className='product-image'>
                                    <img src={ProductImg3} alt='ProductImg3' />
                                </div>
                                <div className='product-info mt-3'>
                                    <h6 className='product-name'>3 Legged Stool</h6>
                                    <p className='product-price'>£189</p>
                                    <p className='sold-by'>Sold by Maker 1</p>
                                </div>
                            </a>
                            <a href="#" title="product-name" className='product-item'>
                                <div className='product-image'>
                                    <img src={ProductImg4} alt='ProductImg4' />
                                </div>
                                <div className='product-info mt-3'>
                                    <h6 className='product-name'>Mirage Tapestry Blanket</h6>
                                    <p className='product-price'>£295</p>
                                    <p className='sold-by'>Sold by Maker 1</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* product category section */}
            <section className='product-section common-spacing common-spacing-bottom'>
                <div className='container mx-auto'>
                    <div className='section-title flex justify-between'>
                        <h6>Shop by Category</h6>
                        <div className='browse-link'>
                            <a href='#' title='browse-all'>Browse all </a>
                        </div>
                    </div>
                    <div className='product-category'>
                        <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-y-[20px]">
                            <a href="#" title="product-name" className='product-item'>
                                <div className='product-image'>
                                    <img src={Category1} alt='Category1' />
                                    <div className='category-tag'>
                                        LIFESTYLE
                                    </div>
                                </div>
                            </a>
                            <a href="#" title="product-name" className='product-item'>
                                <div className='product-image'>
                                    <img src={Category2} alt='Category1' />
                                    <div className='category-tag'>
                                        FAShion
                                    </div>
                                </div>
                            </a>
                            <a href="#" title="product-name" className='product-item'>
                                <div className='product-image'>
                                    <img src={Category3} alt='Category1' />
                                    <div className='category-tag'>
                                        Homewear
                                    </div>
                                </div>
                            </a>
                            <a href="#" title="product-name" className='product-item'>
                                <div className='product-image'>
                                    <img src={Category4} alt='Category1' />
                                    <div className='category-tag'>
                                        Art
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* feature maker scetion */}
            <section className='featured-maker-section common-spacing purple-bg'>
                <div className='container mx-auto'>
                    <div className="owl-theme" >
                        <div className="item">
                            <div class="grid lg:grid-cols-2 grid-cols-1 gap-[20px]  ">
                                <div className='text-part'>
                                    <div className='tag-part'>
                                        <p>FEATURED MAKER</p>
                                    </div>
                                    <div className='feature-content'>
                                        <h6>Lorem ipsum dolor sit amet consectetur</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. </p>
                                        <button className='small-banner-btn purple' pill>View maker</button>
                                    </div>
                                    <div className='owl-dots'>owl-dots customize</div>
                                </div>
                                <div className='image-part relative flex justify-center'>
                                    <img src={MakerImg} alt='MakerImg' />
                                    <div className='left-img absolute'>
                                        <img src={MakerImgLeft} alt='MakerImgLeft' />
                                    </div>
                                    <div className='right-img absolute'>
                                        <img src={MakerImgRight} alt='MakerImgRight' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
            </section>
            {/* product drag scetion */}
            <section className='product-section common-spacing'>
                <div className='container mx-auto'>
                    <div className='section-title flex justify-between'>
                        <h6>OUR FAVOURITES</h6>
                        <div className='browse-link'>
                            <a href='#' title='browse-all'>Browse all </a>
                        </div>
                    </div>
                    <div className='product-part'>
                        <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-y-[20px]">
                            <a href="#" title="product-name" className='product-item'>
                                <div className='product-image'>
                                    <img src={ProductImg1} alt='ProductImg1' />
                                </div>
                                <div className='product-info mt-3'>
                                    <h6 className='product-name'>Jug Vase</h6>
                                    <p className='product-price'><span className='line-through mr-2'>£500</span>£300</p>
                                    <p className='sold-by'>Sold by Maker 1</p>
                                </div>
                            </a>
                            <a href="#" title="product-name" className='product-item'>
                                <div className='product-image'>
                                    <img src={ProductImg2} alt='ProductImg1' />
                                </div>
                                <div className='product-info mt-3'>
                                    <h6 className='product-name'>Erya Cutting Board</h6>
                                    <p className='product-price'>£35</p>
                                    <p className='sold-by'>Sold by Maker 1</p>
                                </div>
                            </a>
                            <a href="#" title="product-name" className='product-item'>
                                <div className='product-image'>
                                    <img src={ProductImg3} alt='ProductImg3' />
                                </div>
                                <div className='product-info mt-3'>
                                    <h6 className='product-name'>3 Legged Stool</h6>
                                    <p className='product-price'>£189</p>
                                    <p className='sold-by'>Sold by Maker 1</p>
                                </div>
                            </a>
                            <a href="#" title="product-name" className='product-item'>
                                <div className='product-image'>
                                    <img src={ProductImg4} alt='ProductImg4' />
                                </div>
                                <div className='product-info mt-3'>
                                    <h6 className='product-name'>Mirage Tapestry Blanket</h6>
                                    <p className='product-price'>£295</p>
                                    <p className='sold-by'>Sold by Maker 1</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* promo-section */}
            <section className='promo-section common-spacing'>
                <div className='grid md:grid-cols-2 grid-cols-1'>
                    <div className='image-block'>
                        <div className='image relative flex items-center'>
                            <img src={PromoImg1} alt='icon' />
                            <div className='image-data absolute'>
                                <h6>PROMO SECTION</h6>
                                <button className='small-banner-btn yellow' pill>Browse all</button>
                            </div>
                        </div>
                    </div>
                    <div className='two-image-block'>
                        <div className='image-block'>
                            <div className='image relative flex items-center'>
                                <img src={PromoImg2} alt='icon' />
                                <div className='image-data absolute'>
                                    <h6>PROMO SECTION 2</h6>
                                    <button className='small-banner-btn yellow' pill>Browse all</button>
                                </div>
                            </div>
                        </div>
                        <div className='image-block'>
                            <div className='image relative flex items-center'>
                                <img src={PromoImg3} alt='icon' />
                                <div className='image-data absolute'>
                                    <h6>PROMO SECTION 3</h6>
                                    <button className='small-banner-btn yellow' pill>Browse all</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* feature maker scetion */}
            <section className='featured-maker-section feature-maker-pot gary-bg common-spacing gary-bg'>
                <div className='container mx-auto'>
                    <div className="owl-theme" >
                        <div className="item">
                            <div class="grid lg:grid-cols-2 grid-cols-1 gap-[20px]">
                                <div className='image-part relative flex justify-center'>
                                    <img src={Pot} alt='MakerImg' />
                                    <div className='right-img absolute'>
                                        <img src={PotMaker} alt='MakerImgRight' />
                                    </div>
                                </div>
                                <div className='text-part'>
                                    <div className='tag-part'>
                                        <p>ABOUT Designsnitch</p>
                                    </div>
                                    <div className='feature-content'>
                                        <h6>Lorem ipsum dolor sit amet, consectetur</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. </p>
                                        <button className='small-banner-btn purple gray' pill>View maker</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div >
                </div>
            </section>
            {/* review section */}
            <section className='review-section common-spacing common-spacing-bottom'>
                <div className='container mx-auto'>
                    <div className='review-section-content flex flex-col items-center gap-[32px]'>
                        <div className='star-part flex justify-center'>
                            <img src={Star} alt='Star' />
                            <img src={Star} alt='Star' />
                            <img src={Star} alt='Star' />
                            <img src={Star} alt='Star' />
                            <img src={Star} alt='Star' />
                        </div>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. </h3>
                        <p>Ronald Richards, Atieler</p>
                    </div>
                </div>
            </section>
            {/* feature-maker scetion */}
            <section className='featured-maker-section common-spacing yellow-bg'>
                <div className='container mx-auto'>
                    <div className="owl-theme" >
                        <div className="item">
                            <div class="grid lg:grid-cols-2 grid-cols-1 gap-[20px]">
                                <div className='text-part'>
                                    <div className='tag-part'>
                                        <p>BECOME A MAKER</p>
                                    </div>
                                    <div className='feature-content'>
                                        <h6>Lorem ipsum dolor sit amet consectetur</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. </p>
                                        <button className='small-banner-btn purple yellow-text' pill>Learn More</button>
                                    </div>
                                </div>
                                <div className='image-part relative flex justify-center'>
                                    <img src={BecomeMaker} alt='MakerImg' />
                                    <div className='left-img absolute'>
                                        <img src={BecomeMakerLeft} alt='MakerImgLeft' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >

                </div>
            </section>
        </>

    );
}

export default Home;