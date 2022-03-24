import React from "react";
import PropTypes from "prop-types";
import Image from "@ui/image";
import Social, { SocialLink } from "@ui/social";
import Icon from "@ui/icon";
import cn from "classnames";
import { ImageType, SocialType } from "@utils/types";
import telegramLogo from "../../data/images/icons/telegram-icon.png";
import discordLogo from "../../data/images/icons/discord-icon.svg";
import linkedinLogo from "../../data/images/icons/linkedin-icon.png";

const ContactInfoCard = ({
                             className,
                             image,
                             title,
                             subtitle,
                             desc,
                             phone,
                             email,
                             socials,
                         }) => {
    return (
        <div className={cn("contact-about-area", className)}>
            {image?.src && (
                <div className="thumbnail">
                    <Image src={image.src} alt="contact-img" />
                </div>
            )}
            <div className="title-area">
                {title && <h4 className="title">{title}</h4>}
                {subtitle && <span>{subtitle}</span>}
            </div>
            <div className="description">
                {desc && <p>{desc}</p>}
                {phone && (
                    <span className="phone">
                        Phone: <a href={`tel:${phone}`}>+{phone}</a>
                    </span>
                )}
                {email && (
                    <span className="mail">
                        Email: <a href={`mailto:${email}`}>{email}</a>
                    </span>
                )}
            </div>
            {socials && (
                <div className="social-area">
                    <div className="name">FIND WITH ME</div>
                    <Social className="social-icone">
                        {socials.map((social) => (
                            <SocialLink key={social.id} path={social.path}>
                                <Image
                                    src={
                                        social.id == 1
                                            ? linkedinLogo
                                            : social.id == 2
                                            ? discordLogo
                                            : telegramLogo
                                    }
                                    alt="icon"
                                    className="w-50"
                                />
                            </SocialLink>
                        ))}
                    </Social>
                </div>
            )}
        </div>
    );
};

ContactInfoCard.propTypes = {
    className: PropTypes.string,
    image: PropTypes.shape(ImageType),
    title: PropTypes.string,
    subtitle: PropTypes.string,
    desc: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
};

export default ContactInfoCard;
