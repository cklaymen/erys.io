import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { NavWrapper, NavPages, NavLink } from "./components";
import { TranslationKey } from "src/modules/Translations/Translation";

const Nav: FC = () => {
  const { t } = useTranslation();

  return (
    <NavWrapper>
      <NavPages>
        <NavLink>{t(TranslationKey.ABOUT_ME)}</NavLink>
        <NavLink>{t(TranslationKey.SERVICES)}</NavLink>
        <NavLink>{t(TranslationKey.WORKS)}</NavLink>
      </NavPages>
    </NavWrapper>
  );
};

export default Nav;
