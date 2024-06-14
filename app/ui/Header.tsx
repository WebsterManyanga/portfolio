import Image from 'next/image';
import autograph from '../../public/autograph.png';

const Header = () => {
  return (
    <header className="snap-start w-full h-full flex flex-col relative items-center justify-center  before:bg-white before:w-32 before:h-1 before:rounded-sm before:right-0 before:absolute before:top-[30%]  after:bg-white after:w-32 after:h-1 after:rounded-sm after:left-0 after:absolute after:bottom-[30%] lg:before:h-1 lg:before:w-1/4 lg:after:h-1 lg:after:w-1/4">
    <h1 className="font-black text-6xl lg:text-9xl">WEBSTER</h1>
    <p className="text-sm">
      WEB DEVELOPER
    </p>
    <a href="./WebsterManyanga_Resume.pdf" className='absolute bottom-24 sm:inline-block mt-20 sm:mt-10 rounded bg-neutral-100 px-2 sm:px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-50 hover:shadow-light-2 hover:text-neutral-800 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong '>Download Resume</a>
    <div className=" hidden lg:block absolute bottom-20 right-20">  
      <Image
        src={autograph}
        alt="autograph"
        width={130}
        height={100}
      />
    </div>
  </header>
  );
}

export default Header;