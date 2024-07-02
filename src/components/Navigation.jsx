import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import PropTypes from "prop-types";

function NavList({ isAdmin, isLoggedIn }) {
  return (
    <List className="mx-5 mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as={Link}
        to="/"
        variant="small"
        color="blue-gray"
        className="font-Lato-Bold"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Typography>
      <Typography
        as={Link}
        to="/services"
        variant="small"
        color="blue-gray"
        className="font-Lato-Bold"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Services
        </ListItem>
      </Typography>
      <Typography
        as={Link}
        to="/contact"
        variant="small"
        color="blue-gray"
        className="font-Lato-Bold"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
      </Typography>
      <Typography
        as={Link}
        to="/about"
        variant="small"
        color="blue-gray"
        className="font-Lato-Bold"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          About Us
        </ListItem>
      </Typography>
      <Typography
        as={Link}
        to="/news"
        variant="small"
        color="blue-gray"
        className="font-Lato-Bold"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">News</ListItem>
      </Typography>
      {isAdmin && (
        <Typography
          as={Link}
          to="/inquiries"
          variant="small"
          color="blue-gray"
          className="font-Lato-Bold"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            Inquiries
          </ListItem>
        </Typography>
      )}
      {isLoggedIn &&
        !isAdmin && ( // condition for non-admin users
          <Typography
            as={Link}
            to="/messages" // Link to Messages page
            variant="small"
            color="blue-gray"
            className="font-Lato-Bold"
          >
            <ListItem className="flex items-center gap-2 py-2 pr-4">
              Messages
            </ListItem>
          </Typography>
        )}
    </List>
  );
}
NavList.propTypes = {
  isAdmin: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.string.isRequired,
};
export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = useState(false);
  const [user, loading] = useAuthState(auth); // Added loading state to handle initial user check
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const isAdmin = user?.email === "itsmepiglet05@gmail.com";

  return (
    <nav className="w-full px-4 py-5 border-0 sticky top-0 bg-white z-10 shadow-sm">
      <div className="flex items-center justify-between w-full text-blue-primary">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 px-5 cursor-pointer py-1.5 lg:ml-2 font-Lato-Black text-2xl tracking-wider uppercase"
        >
          Project<span className="text-Dark-primary">Hub</span>
        </Typography>
        <div className="hidden lg:block">
          <NavList isAdmin={isAdmin} isLoggedIn={!!user} />
        </div>

        <div className="hidden lg:flex items-center gap-2">
          {user && !loading ? (
            <div className="relative">
              <button
                className="flex items-center gap-2 border-2 border-transparent rounded-full focus:outline-none focus:border-blue-gray"
                onClick={toggleDropdown}
              >
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-Lato-Bold">{user.displayName}</span>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-blue-gray rounded-lg shadow-lg z-10">
                  <Button
                    variant="outlined"
                    size="sm"
                    color="blue-gray"
                    fullWidth
                    className="hover:bg-gray-500 hover:text-white"
                    onClick={() => {
                      auth.signOut().then(() => {
                        window.location.reload();
                      });
                    }}
                  >
                    Log Out
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <Button
              variant="outlined"
              size="sm"
              color="blue-gray"
              className="mr-2"
              onClick={googleSignIn}
            >
              Log In
            </Button>
          )}
        </div>

        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList isAdmin={isAdmin} isLoggedIn={!!user} />
        <div className="flex w-full font-flex-nowrap items-center gap-2 lg:hidden">
          {user && !loading ? (
            <button
              className="flex items-center gap-2 border-2 border-transparent rounded-full focus:outline-none focus:border-blue-gray"
              onClick={toggleDropdown}
            >
              <img
                src={user.photoURL}
                alt="User Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="font-Lato-Bold">{user.displayName}</span>
            </button>
          ) : (
            <Button
              variant="outlined"
              size="sm"
              color="blue-gray"
              fullWidth
              onClick={googleSignIn}
            >
              Log In
            </Button>
          )}
        </div>
      </Collapse>
    </nav>
  );
}

export default NavbarWithMegaMenu;
