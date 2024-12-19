const Footer = () => {
    return (
      <footer className="bg-black text-white py-10 mt-16">
        <div className="max-w-screen-xl  mx-auto ">
          <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
            {/* Left Section */}
            <div className="md:w-1/3">
              <div className="flex items-center space-x-2 mb-4">
                <h1 className="text-2xl font-bold">KyberBits</h1>
              </div>
              <p className="text-gray-400 mb-6">
                    Join the KyberBits crypto presale—Strongest 1, Web3 aggregated ecosystem that unites leading blockchains like Bitcoin, Ethereum, and Solana. Our platform is designed for innovative applications set to revolutionize blockchain utilization.
              </p>
              <p className="text-gray-500">
                 KyberBits    <br />
                 Company No: FSC/200/LLC 2233/24 <br />
                Registered Office: Seychelles<br />
                <a href="mailto:support@kyberbits.com" className="text-blue-400">
                        support@kyberbits.com
                </a>
              </p>
            </div>
  
            {/* Middle Sections */}
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
              <div>
                <h3 className="font-semibold text-lg mb-4">About</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Our Vision</li>
                  <li>Tokenomics</li>
                  <li>Roadmap</li>
                  <li>Blogs</li>
                  <li>Whitepaper</li>
                  <li>Q & A</li>
                  <li>How to Buy</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Features</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Wallet</li>
                  <li>Banks & Institutions</li>
                  <li>QUSD</li>
                  <li>QubeQode</li>
                  <li>DVPN</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Legal</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Terms of Use</li>
                  <li>Privacy Policy</li>
                  <li>Cookies Policy</li>
                  <li>Disclaimer</li>
                  <li>Press Kit</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="mt-10 border-t border-gray-800 pt-6 text-center">
            <h3 className="text-lg font-semibold mb-4">Get in touch!</h3>
            <div className="flex justify-center space-x-6">
              {/* Replace with actual social media links */}
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-telegram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  