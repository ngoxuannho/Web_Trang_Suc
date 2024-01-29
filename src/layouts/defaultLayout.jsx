/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */

import Footer from './components/footer';
import Header from './components/header';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            
            <main>{children}</main>
            <Footer />
            
        </div>
    );
}

export default DefaultLayout;
