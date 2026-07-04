import { Projects__css } from "@/app/config/css/landpage";
import project__src from "@/app/config/conf/project__links.json";
import Image from "next/image";
import { useInView } from "@/app/utilities";
import Link from "next/link";
import { UseRef } from "@/app/modules";

export default function Projects() {
    
    const projectArrays = [
        { 
            title: project__src.cordy__connect.title,
            descriptions : project__src.cordy__connect.descriptions,
            profile: project__src.cordy__connect.profile,
            cover: project__src.cordy__connect.cover__photo,
            repo: project__src.cordy__connect.repo,
            visit: project__src.cordy__connect.visit
        },
        { 
            title: project__src.lccb_ai.title,
            descriptions : project__src.lccb_ai.descriptions,
            profile: project__src.lccb_ai.profile,
            cover: project__src.lccb_ai.cover__photo,
            repo: project__src.lccb_ai.repo,
            visit: project__src.lccb_ai.visit
        },
        { 
            title: project__src.AskVerse.title,
            descriptions : project__src.AskVerse.descriptions,
            profile: project__src.AskVerse.profile,
            cover: project__src.AskVerse.cover__photo,
            repo: project__src.AskVerse.repo,
            visit: project__src.AskVerse.visit
        }
    ];

    const scrollRef = UseRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
        scrollRef.current.scrollBy({
            left: -300,
            behavior: "smooth",
        });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
        scrollRef.current.scrollBy({
            left: 300, 
            behavior: "smooth",
        });
        }
    };

    const { ref: title, isInView: titleIsInView } = useInView<HTMLDivElement>(true);
    const { ref: para1, isInView: para1IsInView } = useInView<HTMLDivElement>(true);

    return(
        <section id="Projects" className={Projects__css.projects__sections}>
            <div className={Projects__css.projects__container}>
                <div className={Projects__css.projects__title}>
                    <h2 ref={title} style={{'--titleIsInView': titleIsInView ? 1 : 0} as React.CSSProperties}>
                        <span>P</span>
                        <span>r</span>
                        <span>o</span>
                        <span>j</span>
                        <span>e</span>
                        <span>c</span>
                        <span>t</span>
                        <span>s</span>
                    </h2>
                    <p ref={para1} style={{'--paraIsInView': para1IsInView ? 1 : 0} as React.CSSProperties}>
                        <span>Projects</span>
                        <span>built</span>
                        <span>from</span>
                        <span>curiosity,</span>
                        <span>late-night</span>
                        <span>coding</span>
                        <span>and</span>
                        <span>breaking</span>
                        <span>limits.</span>
                    </p>
                </div>
                <div className={Projects__css.projects__status} ref={scrollRef}>
                    {projectArrays.map((stat) => {
                        const { ref, isInView } = useInView<HTMLDivElement>(false, 0.8);

                        return (
                            <div key={stat.title} ref={ref} className={`${Projects__css.projects__stat} ${isInView ? Projects__css.projects__stat_grow : ''}`}>
                                <div className={Projects__css.projects__stat_imageContain}>
                                    <div className={Projects__css.projects__stat_image}>
                                        <Image
                                        src={stat.profile}
                                        alt={stat.title}
                                        title={stat.title}
                                        width={170}
                                        height={170}
                                        unoptimized
                                        />
                                    </div>
                                    <div className={Projects__css.projects__stat_image__cover}>
                                    <Image
                                        src={stat.cover}
                                        alt={stat.title}
                                        title={stat.title}
                                        fill
                                        unoptimized
                                        />
                                    </div>

                                </div>
                                <div className={Projects__css.projects__stat_title_buttons}>
                                    <h2> {stat.title} </h2>
                                    <span>
                                        <Link href={stat.visit}><button> Visit </button></Link>
                                        <Link href={stat.repo}><button> Open {'>>'}</button></Link> 
                                    </span>
                                    
                                </div>
                                <div className={Projects__css.projects__stat__info}>
                                    <p> {stat.descriptions} </p>
                                </div>
                                <div className={Projects__css.projects__stat_navigators}>
                                    <button onClick={scrollLeft}> {'<<'} Prev</button> 
                                    <button onClick={scrollRight}>Next {'>>'} </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );

}