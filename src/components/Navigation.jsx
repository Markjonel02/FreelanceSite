import React, { useState, useEffect } from "react";

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

function NavList() {
  return (
    <List className=" mx-5 mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as={Link} // Use Link component instead of 'a'
        to="/" // Specify the route
        variant="small"
        color="blue-gray"
        className=" font-Lato-Bold"
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
        to=""
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
        to=""
        variant="small"
        color="blue-gray"
        className="font-Lato-Bold"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">News</ListItem>
      </Typography>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <nav className="w-full px-4 py-5 border-0 shadow-none sticky top-0 bg-white z-10">
      <div className="flex items-center justify-between w-full text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 px-5 cursor-pointer py-1.5 lg:ml-2 font-Lato-Black text-2xl tracking-wider uppercase "
        >
          Project<span className="text-blue-primary">Hub</span>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
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
        <NavList />
        <div className="flex w-full font-flex-nowrap items-center gap-2 lg:hidden">
          <Button
            variant="outlined"
            size="sm"
            color="blue-gray"
            fullWidth
            className=""
          >
            Log In
          </Button>
          <Button variant="gradient" size="sm" fullWidth>
            Sign In
          </Button>
        </div>
      </Collapse>
    </nav>
  );
}

export default NavbarWithMegaMenu;
