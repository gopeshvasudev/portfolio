import { FaEnvelope } from "react-icons/fa";
import { socialMediaIcons } from "../constants/dummyData";
import SocialMediaIcon from "./SocialMediaIcon";

const MyInfoCard = () => {
  return (
    <div className="w-full md:w-[28%] min-h-screen md:max-h-screen md:border-2 border-zinc-700 md:sticky top-0 rounded-3xl p-5 flex flex-col gap-6 xl:gap-8 items-center justify-center">
      <h1 id="text-stroke" className="text-5xl md:text-3xl text-center">
        Gopesh Vasudev
      </h1>

      <div className="profile-image w-56 h-56 md:w-full lg:w-56 lg:h-56 rounded-xl overflow-hidden">
        <img
          src="https://imgs.search.brave.com/_U7W1nzVBWm6ea2LjrColYxF-68PMWOnmwJlUTLHPU8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTQ0/MzE0ODEwL3Bob3Rv/L3BvcnRyYWl0LW9m/LW1hbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9WFZHTU1B/VVhQMWR1d0MtVWJj/RGE3ZTIwblN6Sjdj/UDNwT3doTzNFdnZS/bz0"
          alt="Gopesh vasudev"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="contacts">
        <h2 className="text-center tracking-wider text-xl md:text-[1.3vw]">
          gopeshpalvasudev@gmail.com
        </h2>

        <h2 className="text-center tracking-wider text-xl md:text-[1.3vw]">
          Based in Delhi, India
        </h2>
      </div>

      <div className="social-medias flex flex-wrap gap-5 justify-center">
        {socialMediaIcons?.map((data) => (
          <SocialMediaIcon key={data.icon} href={data.href} icon={data.icon} />
        ))}
      </div>

      <a
        href="#"
        className="w-8/12 sm:w-6/12 md:w-full xl:w-10/12 py-3 rounded-full border-2 border-green-400 bg-green-400 hover:bg-transparent text-black hover:text-white duration-300 flex items-center justify-center gap-2"
      >
        <FaEnvelope /> Hire Me!
      </a>
    </div>
  );
};

export default MyInfoCard;
