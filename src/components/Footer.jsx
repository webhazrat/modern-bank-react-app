import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
export default function Footer() {
  console.log(footerLinks);
  return (
    <footer
      className={`bg-[#0B0A0C99] xl:px-48 sm:px-16 px-6 pt-10 mt-16 text-white`}
    >
      <div className="flex mb-10">
        <div className="flex-1">
          <img src={logo} alt="hooBank" className={`w-60 h-auto mb-5`} />
          <p className="text-white/[0.7] leading-[170%] max-w-xs">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className={`flex-[1.5] flex gap-7`}>
          {footerLinks.map((footerLink) => (
            <div key={footerLink.title} className="flex-1">
              <h4 className={`text-[18px] font-semibold mb-6`}>
                {footerLink.title}
              </h4>
              <ul>
                {footerLink.links.map((link) => (
                  <li key={link.name} className={`mb-3 last:mb-0`}>
                    <a
                      className={`leading-6 inline-block text-white/[0.7]`}
                      href={link.link}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`flex justify-between items-center py-8 border-t border-[#3F3E45]`}
      >
        <p className={`text-white/[0.7]`}>
          Copyright &copy; 2021 HooBank. All Rights Reserved.
        </p>
        <ul className={`flex gap-7`}>
          {socialMedia.map((social) => (
            <li key={social.id}>
              <a href={social.link}>
                <img
                  src={social.icon}
                  alt="Social"
                  className={`w-5 h-5 object-contain`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
