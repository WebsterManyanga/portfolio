"use client";


const Nav = () => {
  return (
    <section className="sticky top-0 z-10">
      <nav className="hidden lg:flex  font-semibold px-10 gap-72 justify-center pt-6 bg-black  bg-opacity-60">
        <a href="#projects">PROJECTS</a>
        <a href="#workExperience">WORK EXPERIENCE</a>
        <a href="#certifications">CERTIFICATIONS</a>
        <a href="#footer">CONTACT ME</a>
      </nav>
    </section>
  );
};

export default Nav;
