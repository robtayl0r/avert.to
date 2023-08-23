import Navbar from './navbar';
import Footer from './footer';

export default function Layout({children}){
    return (
        <div className="container antialiased">
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </div>
    );
}
