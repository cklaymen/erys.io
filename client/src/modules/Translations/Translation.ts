export enum TranslationKey {
  INIT_BUBBLE_MESSAGE = "INIT_BUBBLE_MESSAGE",
  QUESTION_ABOUT_WEB_APPS = "QUESTION_ABOUT_WEB_APPS",
  ANSWER_ABOUT_WEB_APPS = "ANSWER_ABOUT_WEB_APPS",
  QUESTION_ABOUT_WEBSITES = "QUESTION_ABOUT_WEBSITES",
  ANSWER_ABOUT_WEBSITES = "ANSWER_ABOUT_WEBSITES",
  QUESTION_ABOUT_MODERN_TECHNOLOGIES = "QUESTION_ABOUT_MODERN_TECHNOLOGIES",
  ANSWER_ABOUT_MODERN_TECHNOLOGIES = "ANSWER_ABOUT_MODERN_TECHNOLOGIES",
  QUESTION_ABOUT_EDUCATION = "QUESTION_ABOUT_EDUCATION",
  ANSWER_ABOUT_EDUCATION = "ANSWER_ABOUT_EDUCATION",
  QUESTION_ABOUT_EXPERIENCE = "QUESTION_ABOUT_EXPERIENCE",
  ANSWER_ABOUT_EXPERIENCE = "ANSWER_ABOUT_EXPERIENCE",
  SERVICES = "SERVICES",
  SERVICES_SHORT_DESCRIPTION = "SERVICES_SHORT_DESCRIPTION",
  WEB_APPS_SITES = "WEB_APPS_SITES",
  WEB_APPS_SITES_SERVICE_SHORT_DESCRIPTION = "WEB_APPS_SITES_SERVICE_SHORT_DESCRIPTION",
  CODING = "CODING",
  CODING_SERVICE_SHORT_DESCRIPTION = "CODING_SERVICE_SHORT_DESCRIPTION",
  SERVER_DOMAIN = "SERVER_DOMAIN",
  SERVER_DOMAIN_SERVICE_SHORT_DESCRIPTION = "SERVER_DOMAIN_SERVICE_SHORT_DESCRIPTION",
  MORE_ABOUT_SERVICES = "MORE_ABOUT_SERVICES",
  STEPS = "STEPS",
  STEPS_SHORT_DESCRIPTION = "STEPS_SHORT_DESCRIPTION",
  NEED_ANALYSIS_STEP_TITLE = "NEED_ANALYSIS_STEP_TITLE",
  NEED_ANALYSIS_STEP_DESCRIPTION = "NEED_ANALYSIS_STEP_DESCRIPTION",
  GRAPHIC_DESIGN_STEP_TITLE = "GRAPHIC_DESIGN_STEP_TITLE",
  GRAPHIC_DESIGN_STEP_DESCRIPTION = "GRAPHIC_DESIGN_STEP_DESCRIPTION",
  CREATING_APP_STEP_TITLE = "CREATING_APP_STEP_TITLE",
  CREATING_APP_STEP_DESCRIPTION = "CREATING_APP_STEP_DESCRIPTION",
  SUPPORT_STEP_TITLE = "SUPPORT_STEP_TITLE",
  SUPPORT_STEP_DESCRIPTION = "SUPPORT_STEP_DESCRIPTION",
}

type Translation = {
  [key in TranslationKey]: string;
};

export default Translation;
