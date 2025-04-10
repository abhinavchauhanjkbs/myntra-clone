import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getCartData } from '../../Redux/Slices/productSlice'

function Header() {
    const navigate = useNavigate()
    const cart = useSelector(getCartData)

    const showTooltip = () => {
        const tooltip = document.getElementById('search_tooltip')
        if (tooltip) tooltip.style.display = 'block'
    }

    const hideTooltip = () => {
        const tooltip = document.getElementById('search_tooltip')
        if (tooltip) tooltip.style.display = 'none'
    }

    return (
        <div className='myntra_header'>
            {/* Made by Abhinav - Left Section */}
            <div className='made_by'>
                <span className='made_by_text'>Made By</span>
                <span className='abhinav_text'>Abhinav</span>
            </div>

            {/* Center Section: Logo + Navigation */}
            <div className='header_navigation'>
                <div className='header_logo' onClick={() => navigate('/')}></div>
                <div className='nav'>
                    <div className='nav_item nav_item_men' onClick={() => navigate('/products')}>
                        <span>MEN</span>
                    </div>
                    <div className='nav_item nav_item_women' onClick={() => navigate('/products')}>
                        <span>WOMEN</span>
                    </div>
                    <div className='nav_item nav_item_kids' onClick={() => navigate('/products')}>
                        <span>KIDS</span>
                    </div>
                    <div className='nav_item nav_item_home' onClick={() => navigate('/products')}>
                        <span>HOME</span>
                    </div>
                    <div className='nav_item nav_item_beauty' onClick={() => navigate('/products')}>
                        <span>BEAUTY</span>
                    </div>
                    <div className='nav_item nav_item_women' onClick={() => navigate('/products')}>
                        <span>STUDIO</span>
                    </div>
                </div>
            </div>

            {/* Right Section: Search + Icons */}
            <div className='header_nav'>
                <div
                    className='header_search'
                    onMouseEnter={showTooltip}
                    onMouseLeave={hideTooltip}
                >
                    <input
                        type='text'
                        placeholder='Search for products, brand and more'
                        onFocus={showTooltip}
                        onBlur={hideTooltip}
                    />
                    <i className='search_icon'></i>
                    <div id='search_tooltip' className='search_tooltip'>
                        You can see limited data through the sections only due to dummy data content right now
                    </div>
                </div>
                <div className='header_items'>
                    <div className='header_item' onClick={() => navigate('/orders')}>
                        <i className='orders_icon'></i>
                        <span>Orders</span>
                    </div>
                    <div className='header_item' onClick={() => navigate('/wishlist')}>
                        <i className='heart_icon'></i>
                        <span>Wishlist</span>
                    </div>
                    <div className='header_item' onClick={() => navigate('/cart')}>
                        <i className='cart_icon'></i>
                        <span>Bag {cart.length}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
