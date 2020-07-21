import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import {
  NavWrapper,
  NavPages,
  NavLink,
  NavContact,
  NavLinkFloatButton,
  NavLinkText,
  StyledMenuFloatButton,
} from "./components";
import { TranslationKey } from "src/modules/Translations/Translation";

const Nav: FC = () => {
  const { t } = useTranslation();

  return (
    <NavWrapper>
      <StyledMenuFloatButton />
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
        <NavLink>
          <NavLinkFloatButton iconType="Mail" />
          <NavLinkText>hello@erys.io</NavLinkText>
        </NavLink>
        <NavLink>
          <NavLinkFloatButton iconType="Phone" />
          <NavLinkText>699 712 600</NavLinkText>
        </NavLink>
      </NavContact>
    </NavWrapper>
  );
};

export default Nav;
