import animelogo from "../assets/anime-logo.png";

function Footer() {
  return (
    <div className="bg-[#1c1c1c] w-4/5 ml-[20%] gap-40 flex flex-row h-[45%]">
      <div className="relative flex flex-row mt-20 justify-start text-xs p-10">
        <img
          className="absolute w-auto h-[3rem] flex place-items-end items-end"
          src={animelogo}
          alt=""
        />
        <div className="mt-14">
          <p>Copyright &copy; Oladapo 2025. All Rights Reserved.</p>
          <p className="mt-5">
            Disclaimer: This site does not store any files on it&apos;s server.
            All contents are provided by <br />
            non affiliated third parties.
          </p>
        </div>
      </div>

      <div className=" flex flex-row gap-14 mt-32">
        <div>
          <p className="font font-bold text-lg">Help</p>
          <ul>
            <li>Contact</li>
            <li>FAQ</li>
            <li>My App</li>
          </ul>
        </div>

        <div>
          <p className="font font-bold text-lg">Links</p>
          <ul>
            <li>A-Z List</li>
            <li>Upcoming</li>
            <li>Most Popular</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
