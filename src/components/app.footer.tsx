

function Footer() {
    return (
        <footer style={{
            backgroundColor: "olive",
            textAlign: "center"
        }}>
            <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </footer>
    );
};

export default Footer;