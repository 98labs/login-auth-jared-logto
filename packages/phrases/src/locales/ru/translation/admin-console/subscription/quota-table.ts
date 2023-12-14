const quota_table = {
  quota: {
    title: 'Квота',
    tenant_limit: 'Лимит арендатора',
    base_price: 'Базовая цена',
    mau_unit_price: '* Цена за активного пользователя (MAU)',
    mau_limit: 'Лимит активных пользователей (MAU)',
  },
  application: {
    title: 'Приложения',
    total: 'Всего приложений',
    m2m: 'Приложения "машина-машина"',
  },
  resource: {
    title: 'Ресурсы API',
    resource_count: 'Количество ресурсов',
    scopes_per_resource: 'Разрешения на ресурс',
  },
  branding: {
    title: 'Интерфейс и брендинг',
    custom_domain: 'Пользовательский домен',
    custom_css: 'Пользовательский CSS',
    app_logo_and_favicon: 'Логотип и фавикон приложения',
    dark_mode: 'Темный режим',
    i18n: 'Интернационализация',
  },
  user_authn: {
    title: 'Проверка подлинности пользователя',
    omni_sign_in: 'Многочисленные входы',
    password: 'Пароль',
    passwordless: 'Без пароля - Электронная почта и SMS',
    email_connector: 'Подключение электронной почты',
    sms_connector: 'Подключение SMS',
    social_connectors: 'Социальные подключения',
    standard_connectors: 'Стандартные подключения',
    built_in_email_connector: 'Встроенное подключение электронной почты',
    mfa: 'MFA',
    sso: 'Единый вход в корпоративные системы',
  },
  user_management: {
    title: 'Управление пользователями',
    user_management: 'Управление пользователями',
    roles: 'Роли',
    scopes_per_role: 'Разрешения на роль',
  },
  audit_logs: {
    title: 'Аудит журналов',
    retention: 'Сохранение',
  },
  hooks: {
    title: 'Вебхуки',
    hooks: 'Вебхуки',
  },
  organizations: {
    title: 'Организация',
    /** UNTRANSLATED */
    organizations: 'Organizations',
    /** UNTRANSLATED */
    monthly_active_organization: 'Monthly active organization',
    /** UNTRANSLATED */
    allowed_users_per_org: 'Allowed users per org',
    /** UNTRANSLATED */
    invitation: 'Invitation (Coming soon)',
    /** UNTRANSLATED */
    org_roles: 'Org roles',
    /** UNTRANSLATED */
    org_permissions: 'Org permissions',
    /** UNTRANSLATED */
    just_in_time_provisioning: 'Just-in-time provisioning',
  },
  support: {
    title: 'Поддержка',
    community: 'Сообщество',
    customer_ticket: 'Техническая поддержка',
    premium: 'Премиум',
  },
  mau_unit_price_footnote:
    '* Ваши активные пользователи в месяц (MAU) разделены на 3 уровня в зависимости от того, как часто они входят в систему в течение биллингового периода. Каждый уровень имеет свою стоимость за единицу MAU.',
  unlimited: 'Неограниченно',
  contact: 'Связаться',
  monthly_price: '${{value, number}}/мес.',
  mau_price: '${{value, number}}/MAU',
  days_one: '{{count, number}} день',
  days_other: '{{count, number}} дней',
  add_on: 'Дополнительно',
  tier: 'Уровень{{value, number}}: ',
  /** UNTRANSLATED */
  free_token_limit_tip: 'Free for {{value}}M token issued.',
  /** UNTRANSLATED */
  paid_token_limit_tip:
    'Free for {{value}}M token issued. We may add charges if you go beyond {{value}}M tokens once we finalize the prices.',
  /** UNTRANSLATED */
  paid_quota_limit_tip:
    'We may add charges for features that go beyond your quota limit as add-ons once we finalize the prices.',
  /** UNTRANSLATED */
  beta_feature_tip:
    'Free to use during the beta phase. We will begin charging once we finalize the add-on pricing.',
  /** UNTRANSLATED */
  beta: 'Beta',
  /** UNTRANSLATED */
  add_on_beta: 'Add-on (Beta)',
};

export default Object.freeze(quota_table);
