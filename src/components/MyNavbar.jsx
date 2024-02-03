import { Navbar } from "keep-react";
import { FaGithub } from "react-icons/fa";
import { GiCyberEye } from "react-icons/gi";
export const MyNavbar = () => {
  return (
    <Navbar
      fluid={true}
      className="bg-transparent fixed top-0 left-0 right-0 z-50  backdrop-blur-lg"
    >
      <Navbar.Container className="flex items-center justify-between pt-2">
        <Navbar.Container
          tag="ul"
          className="lg:flex hidden items-center justify-between gap-8 pl-20"
        >
          <Navbar.Link
            className="text-white hover:text-red-300 opacity-50 hover:opacity-100"
            href="https://github.com/Abic26"
            icon={<GiCyberEye size={45} title="abic" />}
            iconAnimation={true}
          />
        </Navbar.Container>

        <Navbar.Collapse
          collapseType="sidebar"
          className="bg-transparent text-white"
        >
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
           
            <Navbar.Container
              tag="ul"
              className="flex flex-col gap-4 items-end justify-end pt-2"
            >
               
              <Navbar.Link
                className="opacity-50 hover:opacity-100"
                href="https://github.com/Abic26"
                icon={<FaGithub size={25} />}
                iconAnimation={false}
              />
              <Navbar.Link
              className="text-white hover:text-red-300 opacity-50 hover:opacity-100"
              href="https://github.com/Abic26"
              icon={<GiCyberEye size={45} title="abic" />}
              iconAnimation={true}
            />
            </Navbar.Container>
          </Navbar.Container>
        </Navbar.Collapse>

        <Navbar.Container className="flex items-center gap-3 pr-20">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-5"
          >
            <Navbar.Link
              className="text-white hover:text-red-300 opacity-50 hover:opacity-100"
              href="https://github.com/Abic26"
              icon={<FaGithub size={25} />}
              iconAnimation={false}
            />
          </Navbar.Container>
          <Navbar.Toggle className="text-white opacity-100 hover:opacity-40 backdrop-blur-lg" />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};
