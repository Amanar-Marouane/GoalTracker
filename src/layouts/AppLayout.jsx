import Header from './../components/Header';
import Footer from './../components/Footer';

const AppLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default AppLayout;