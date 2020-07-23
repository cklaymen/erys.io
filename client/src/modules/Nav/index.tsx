import React, { FC, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";

import {
  NavWrapper,
  NavPages,
  NavLink,
  NavContact,
  NavLinkFloatButton,
  NavLinkText,
  StyledMenuFloatButton,
  NavContainer,
  DimBackground,
  NavSocials,
  SocialIcon,
  SocialLink,
} from "./components";
import { TranslationKey } from "src/modules/Translations/Translation";
import {
  EMAIL,
  PHONE,
  PHONE_VALUE,
  FB_URL,
  LINKEDIN_URL,
  INSTAGRAM_URL,
} from "src/const";

const Nav: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = useCallback(() => setIsOpen(!isOpen), [
    isOpen,
    setIsOpen,
  ]);
  const { t } = useTranslation();

  return (
    <NavWrapper show={isOpen}>
      {isOpen && <DimBackground show={isOpen} onClick={toggleIsOpen} />}
      <StyledMenuFloatButton
        onClick={toggleIsOpen}
        icon={isOpen ? "Close" : "Menu"}
      />
      <NavContainer>
        <NavPages>
          <NavLink>
            <NavLinkText>{t(TranslationKey.ABOUT_ME)}</NavLinkText>
          </NavLink>
          <NavLink>
            <NavLinkText>{t(TranslationKey.SERVICES)}</NavLinkText>
          </NavLink>
          <NavLink>
            <NavLinkText>{t(TranslationKey.WORKS)}</NavLinkText>
          </NavLink>
        </NavPages>
        <NavContact>
          <NavSocials>
            <SocialLink href={FB_URL} target="_blank">
              <SocialIcon type="Fb" />
            </SocialLink>
            <SocialLink href={INSTAGRAM_URL} target="_blank">
              <SocialIcon type="Instagram" />
            </SocialLink>
            <SocialLink href={LINKEDIN_URL} target="_blank">
              <SocialIcon type="LinkedIn" />
            </SocialLink>
          </NavSocials>
          <NavLink href={`mailto:${EMAIL}`}>
            <NavLinkFloatButton iconType="Mail" />
            <NavLinkText>{EMAIL}</NavLinkText>
          </NavLink>
          <NavLink href={`tel:${PHONE_VALUE}`}>
            <NavLinkFloatButton iconType="Phone" />
            <NavLinkText>{PHONE}</NavLinkText>
          </NavLink>
        </NavContact>
      </NavContainer>
    </NavWrapper>
  );
};

export default Nav;
