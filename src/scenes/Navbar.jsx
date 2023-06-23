import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import menu from "../assets/menu-icon.svg";
import close from "../assets/close-icon.svg";
import { FaSearch, FaHeart } from "react-icons/fa";
import "./Navbar.css";
import { motion } from "framer-motion";
import navbar1 from "../assets/navbar1.jpg";
import navbar2 from "../assets/navbar2.jpg";
import navbar3 from "../assets/navbar3n.jpg";
import navbar4 from "../assets/navbar4.jpg";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      style={{ color: "white", textDecoration: "none" }}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ selectedPage, setSelectedPage }) => {
  const products = [
    {
      image: navbar1,
      heading: "Lessons from the lab ",
      subheading: "The next chapter in Aesop Fragrance ",
    },
    {
      image: navbar2,
      heading: "Habitat",
      subheading: "A guide to home fragrance",
    },
    {
      image: navbar3,
      heading: "Podcast",
      subheading: "Radiomatique Future Fables",
    },
    {
      image: navbar4,
      heading: "Culture",
      subheading: "Musing from The Rain Garden",
    },
  ];

  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";

  useEffect(() => {
    const handleScroll = () => {
      setIsTopOfPage(window.pageYOffset === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${navbarBackground} z-40 w-full fixed top-0 py-6 bg-black text-white ${
        isTopOfPage ? "" : "hidden"
      }`}
    >
      <div className="flex items-left justify-between mx-auto w-5/6">
        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between gap-4 font-opensans text-sm font-semibold">
            <Link
              page="Skin care"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Body & Hand"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Hair"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Fragrance"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Kids & Travel"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Gifts"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Read"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Stores"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Facial Appointments"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <FaSearch className="ml-2" />
            <div className="flex justify-between gap-4 ml-32">
              <Link
                page="Log In"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Cabinet"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Cart"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        ) : (
          <>
            <button
              className="rounded-full bg-red p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <img alt="menu-icon" src={menu} />
            </button>
            <h3 className="font-bold">Aesop</h3>
            <FaHeart className="text-red" />
            <h3 className="mr-4 font-semibold">Cart</h3>
          </>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-between p-12">
              <h3 className="font-bold mr-8 text-lg text-deep-blue">Aesop</h3>
              <FaSearch className="mx-1" />
              <FaHeart />
              <h3 className="ml-1 mr-4 font-semibold text-deep-blue">Cart</h3>
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src={close} />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-6 ml-[33%] text-sm text-deep-blue">
              <Link page="Skin care" />
              <Link page="Body & Hand" />
              <Link page="Hair" />
              <Link page="Fragrance" />
              <Link page="Home" />
              <Link page="Kids & Travel" />
              <Link page="Gifts" />
              <Link page="Read" />
              <Link page="Stores" />
              <Link page="Facial Appointments" />
            </div>
            <div className="relative flex items-center">
              <div
                id="slider"
                className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth "
              >
                {products.map((product, index) => (
                  <motion.div
                    key={index}
                    className="w-64 h-64 inline-block p-2 ml-8 mr-8 cursor-pointer hover:scale-105 ease-in-out duration-300"
                    style={{
                      scrollSnapAlign: "start",
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={product.image} alt="Product"   />
                    <div className="text-center">
                      <h3 className="text-sm font-bold text-black">
                        {product.heading}
                      </h3>
                      <p className="text-sm whitespace-normal text-black">
                        {product.subheading}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
