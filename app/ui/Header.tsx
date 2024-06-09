import Image from 'next/image';
import autograph from '../../public/autograph.png';

const Header = () => {
  return (
    <header className="snap-start w-full h-full flex flex-col relative items-center justify-center  before:bg-white before:w-32 before:h-1 before:rounded-sm before:right-0 before:absolute before:top-[30%]  after:bg-white after:w-32 after:h-1 after:rounded-sm after:left-0 after:absolute after:bottom-[30%] lg:before:h-1 lg:before:w-1/4 lg:after:h-1 lg:after:w-1/4">
    <h1 className="font-black text-6xl lg:text-9xl">WEBSTER</h1>
    <p className="text-sm">
      WEB DEVELOPER
    </p>
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