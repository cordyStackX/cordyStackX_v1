import React from "react";
import { Footer__css } from "@/app/config/css/landpage";
import { useInView } from "@/app/utilities";
import setting from "@/app/config/conf/setting.json";
import { 
    FaLinkedin, FaGithub, 
    FaFacebook, FaTwitter, 
    FaTiktok, FaTelegram,
    FaWhatsapp
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    const { ref: show_info, isInView: show_infoIsInView } = useInView<HTMLDivElement>(true);
    const { ref: show_src, isInView: show_srcIsInView } = useInView<HTMLDivElement>(true);
    const { ref: show_src_h2, isInView: show_src_h2IsInView } = useInView<HTMLDivElement>(true);

    return(
        <footer id="contacts" className={Footer__css.contacts__footer} >
            <div className={Footer__css.contacts__container} >
                <div ref={show_info} className={Footer__css.contacts__info} style={{'--show-info': show_infoIsInView ? 1 : 0} as React.CSSProperties}>
                    <h3>Social Media</h3>
                    <a href={setting.links__src.Social__links.linked_in} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30}/><p>Marc Giestin Louis Cordova</p>
                    </a>
                    <a href={setting.links__src.Social__links.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30}/><p>CordyStackX</p>
                    </a>
                    <a href={setting.links__src.Social__links.facebook} target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={30}/><p>Marc Giestin Louis Cordova | CordyStackX</p>
                    </a>
                    <a href={setting.links__src.Social__links.twitter} target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={30}/><p>CordyStackX</p>
                    </a>
                    <a href={setting.links__src.Social__links.tiktok} target="_blank" rel="noopener noreferrer">
                        <FaTiktok size={30}/><p>CordyStackX</p>
                    </a>
                </div>
                <div ref={show_src} className={Footer__css.contacts__src} style={{'--show-src': show_srcIsInView ? 1 : 0} as React.CSSProperties}>
                    <h3>Contacts</h3>
                    <a href={"mailto: cordystackx@gmail.com"}>
                        <MdEmail size={30}/><p>cordystackx@gmail.com</p>
                    </a>
                    <a href="https://t.me/cordystackx" target="_blank" rel="noopener noreferrer">
                        <FaTelegram size={30}/><p>@CordyStackX</p>
                    </a>
                    <a href="https://wa.me/639763441649" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={30}/><p>+63 976 344 1649</p>
                    </a>
                    <h2 ref={show_src_h2} style={{'--show-src-h2': show_src_h2IsInView ? 1 : 0} as React.CSSProperties}>
                        <span>C</span>
                        <span>o</span>
                        <span>r</span>
                        <span>d</span>
                        <span>y</span>
                        <span>S</span>
                        <span>t</span>
                        <span>a</span>
                        <span>c</span>
                        <span>k</span>
                        <span>X</span>
                    </h2>
                </div>
            </div>
        </footer>
    );
}
