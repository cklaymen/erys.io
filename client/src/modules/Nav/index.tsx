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
  FloatButtonsWrapper,
  FloatButtonInternalLink,
  FloatButtonExternalLink,
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
import useDevice from "src/modules/shared/useDevice";
import FloatButtonWithLabel from "src/modules/Nav/FloatButtonWithLabel";
import ExternalLink from "src/modules/shared/ExternalLink";
import { useRouteMatch } from "react-router-dom";
import usePath from "src/modules/Routes/usePath";
import langs from "src/modules/Translations/langs";

const Nav: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = useCallback(() => setIsOpen(!isOpen), [
    isOpen,
    setIsOpen,
  ]);
  const handlePageLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);
  const { t } = useTranslation();
  const { isSize } = useDevice();
  const { getPath } = usePath();
  const isAbout =
    useRouteMatch({
      path: getPath("about", langs),
      exact: true,
    }) !== null;
  const isServices =
    useRouteMatch({
      path: getPath("services", langs),
      exact: true,
    }) !== null;
  const isWorks =
    useRouteMatch({
      path: getPath("works", langs),
      exact: true,
    }) !== null;

  const isLargerDevice = isSize("large", "extraLarge");

  if (isLargerDevice) {
    return (
      <FloatButtonsWrapper>
        <NavPages>
          <FloatButtonInternalLink
            location="about"
            onClick={handlePageLinkClick}
          >
            <FloatButtonWithLabel
              iconType="About"
              label={t(TranslationKey.ABOUT_ME)}
              active={isAbout}
            />
          </FloatButtonInternalLink>
          <FloatButtonInternalLink
            location="services"
            onClick={handlePageLinkClick}
          >
            <FloatButtonWithLabel
              iconType="Services"
              label={t(TranslationKey.SERVICES)}
              active={isServices}
            />
          </FloatButtonInternalLink>
          <FloatButtonInternalLink
            location="works"
            onClick={handlePageLinkClick}
          >
            <FloatButtonWithLabel
              iconType="Works"
              label={t(TranslationKey.WORKS)}
              active={isWorks}
            />
          </FloatButtonInternalLink>
        </NavPages>
        <NavContact>
          <FloatButtonExternalLink href={`mailto:${EMAIL}`}>
            <FloatButtonWithLabel iconType="Mail" label={EMAIL} />
          </FloatButtonExternalLink>
          <FloatButtonExternalLink href={`tel:${PHONE_VALUE}`}>
            <FloatButtonWithLabel iconType="Phone" label={PHONE} />
          </FloatButtonExternalLink>
        </NavContact>
      </FloatButtonsWrapper>
    );
  }

  return (
    <NavWrapper show={isOpen}>
      {isOpen && <DimBackground show={isOpen} onClick={toggleIsOpen} />}
      <StyledMenuFloatButton
        onClick={toggleIsOpen}
        icon={isOpen ? "Close" : "Menu"}
      />
      <NavContainer>
        <NavPages>
          <FloatButtonInternalLink
            location="about"
            onClick={handlePageLinkClick}
            aria-label={t(TranslationKey.ABOUT_ME)}
          >
            <NavLink>
              <NavLinkText>{t(TranslationKey.ABOUT_ME)}</NavLinkText>
            </NavLink>
          </FloatButtonInternalLink>
          <FloatButtonInternalLink
            location="services"
            onClick={handlePageLinkClick}
            aria-label={t(TranslationKey.SERVICES)}
          >
            <NavLink>
              <NavLinkText>{t(TranslationKey.SERVICES)}</NavLinkText>
            </NavLink>
          </FloatButtonInternalLink>
          <FloatButtonInternalLink
            location="works"
            onClick={handlePageLinkClick}
            aria-label={t(TranslationKey.WORKS)}
          >
            <NavLink>
              <NavLinkText>{t(TranslationKey.WORKS)}</NavLinkText>
            </NavLink>
          </FloatButtonInternalLink>
        </NavPages>
        <NavContact>
          <NavSocials>
            <SocialLink href={FB_URL} target="_blank" aria-label="Facebook">
              <SocialIcon type="Fb" />
            </SocialLink>
            <SocialLink
              href={INSTAGRAM_URL}
              target="_blank"
              aria-label="Instagram"
            >
              <SocialIcon type="Instagram" />
            </SocialLink>
            <SocialLink
              href={LINKEDIN_URL}
              target="_blank"
              aria-label="LinkedIn"
            >
              <SocialIcon type="LinkedIn" />
            </SocialLink>
          </NavSocials>
          <ExternalLink href={`mailto:${EMAIL}`}>
            <NavLink>
              <NavLinkFloatButton iconType="Mail" aria-label="Mail" />
              <NavLinkText>{EMAIL}</NavLinkText>
            </NavLink>
          </ExternalLink>
          <ExternalLink href={`tel:${PHONE_VALUE}`}>
            <NavLink>
              <NavLinkFloatButton iconType="Phone" aria-label="Phone" />
              <NavLinkText>{PHONE}</NavLinkText>
            </NavLink>
          </ExternalLink>
        </NavContact>
      </NavContainer>
    </NavWrapper>
  );
};

export default Nav;
