const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-gray-200 px-0 py-0">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left sm:text-center">
        {/* SERVICES */}
        <div>
          <h3 className="text-xl font-bold mb-4">SERVICES</h3>
          <ul className="space-y-2 text-sm text-left sm:text-center">
            <li>Term & Condition</li>
            <li>Return Policy</li>
            <li>Shipping Policy</li>
            <li>Virtual Appointment</li>
            <li>Private Policy</li>
            <li>Payment option</li>
            <li>Tax & Duties</li>
            <li>Jewellery Care</li>
            <li>Track Your Order</li>
            <li>Sizing</li>
            <li>FAQ'S</li>
          </ul>
        </div>

        {/* CATELOG */}
        <div>
          <h3 className="text-xl font-bold mb-4">CATELOG</h3>
          <ul className="space-y-2 text-sm text-left sm:text-center">
            <li>Wedding Ring</li>
            <li>Engagement Ring</li>
            <li>Earrings</li>
            <li>Bracelets</li>
            <li>Pendant</li>
            <li>Chain/Necklaces</li>
            <li>Watch</li>
            <li>Grillz</li>
          </ul>
        </div>

        {/* ABOUT US */}
        <div>
          <h3 className="text-xl font-bold mb-4">ABOUT US</h3>
          <ul className="space-y-2 text-sm text-left sm:text-center">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* CONTACT US */}
        <div className="text-sm text-left sm:text-center">
          <h3 className="text-xl font-bold mb-4">CONTACT US</h3>
          <p>
            Address: 2nd Floor, Red Turning Point,<br />
            Lambe Hanuman Rd, near Matavadi Police Station,<br />
            Sadhna Society, Laxman Nagar,<br />
            Varachha, Surat, Gujarat 395006
          </p>
          <p className="mt-4">
            Phone: +1 (762) 366-4914<br />
            Email: info@rjgemsandjewel.com<br />
            Working hours from 9:00 – 18:00 EST
          </p>
          <div className="flex justify-center sm:justify-center space-x-4 mt-4">
            <a href="#"><i className="fab fa-facebook-f" /></a>
            <a href="#"><i className="fab fa-twitter" /></a>
            <a href="#"><i className="fab fa-pinterest" /></a>
            <a href="#"><i className="fab fa-linkedin-in" /></a>
            <a href="https://www.instagram.com/rj_gems_jewels/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6 px-6 text-center text-sm text-gray-400">
        <p>© RJ Gems And Jewel’s 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
