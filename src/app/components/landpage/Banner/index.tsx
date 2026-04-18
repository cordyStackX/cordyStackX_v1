import { Banner__css } from "@/app/config/css/landpage";
import setting from "@/app/config/conf/setting.json";
import { 
    FaLinkedin, FaGithub, 
    FaFacebook, FaTwitter, 
    FaTiktok
} from "react-icons/fa";
import {
    UseScroll__scale, UseScroll__opacity
} from "@/app/modules";
import Cube from "./fx_effects";
import { useInView } from "@/app/utilities";


export default function Banner() {

    const scrollShrink = UseScroll__scale();
    const scrollFade = UseScroll__opacity();
    const { ref: title, isInView: titleIsInView } = useInView<HTMLDivElement>(true);
    const { ref: links, isInView: linksIsInView } = useInView<HTMLDivElement>(true);

    return(
        <section className={Banner__css.banner__sections}>
            <div className={Banner__css.banner__container} 
            style={{ '--scroll-shrink' : `${scrollShrink}`, '--scroll-fade' : `${scrollFade}`} as React.CSSProperties}
            >
                <div className={Banner__css.banner__left_side} style={{'--fade-in': titleIsInView ? 1 : 0} as React.CSSProperties} >
                    <div className={Banner__css.banner__left_side_title} >
                        <h1 ref={title} style={{'--load-appear': titleIsInView ? 1 : 0} as React.CSSProperties}>
                            <span>Full</span>
                            <span>Stack</span>
                            <span>Web</span>
                            <span>/</span>
                            <span>Web3</span>
                            <span>Developer</span>
                            <span>CordyStackX</span>
                        </h1>
                        <h4>Portfolio</h4>
                    </div>
                    <div className={Banner__css.banner__left_side_links} ref={links} style={{'--load-links': linksIsInView ? 1 : 0} as React.CSSProperties}>
                        <h2>Featured Web3 Projects </h2>
                        <a href={setting.links__src.Social__links.linked_in} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30}/>
                        </a>
                        <a href={setting.links__src.Social__links.github} target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30}/>
                        </a>
                        <a href={setting.links__src.Social__links.facebook} target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={30}/>
                        </a>
                        <a href={setting.links__src.Social__links.twitter} target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={30}/>
                        </a>
                        <a href={setting.links__src.Social__links.tiktok} target="_blank" rel="noopener noreferrer">
                            <FaTiktok size={30}/>
                        </a>
                    </div>
                    <p>Open Source Software Developer specializing in scalable apps with 
                        Next.js, Express, and PostgreSQL. Experienced in smart contracts 
                        (Hardhat, Wagmi) and SEO-driven growth strategies.
                    </p>
                    <div className={Banner__css.banner__left_side_buttons}>
                        <span></span>
                        <a href="#About"><button>Build With Me</button></a>
                    </div>
                    
                </div>
                <Cube />
            </div>
            
        </section>
    );
}