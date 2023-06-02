module.exports = ({env}) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: env("VERCEL_DEPLOY_HOOK"),
      apiToken: env("VERCEL_API_TOKEN"),
      appFilter: env("VERCEL_APP_FILTER"),
      teamFilter: env('VERCEL_TEAM_FILTER'),
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    }
  },
  upload: {
    config: {
      provider: env("NODE_ENV") === 'development' ? "local": "strapi-provider-upload-azure-storage",
      providerOptions: {
        account: env("STORAGE_ACCOUNT"),
        accountKey: env("STORAGE_ACCOUNT_KEY"),//either account key or sas token is enough to make authentication
        sasToken: env("STORAGE_ACCOUNT_SAS_TOKEN"),
        serviceBaseURL: env("STORAGE_URL"), // optional
        containerName: env("STORAGE_CONTAINER_NAME"),
        defaultPath: "assets",
        cdnBaseURL: env("STORAGE_CDN_URL"), // optional
      },
    },
  },
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'itsmanoharkumar@gmail.com',
        defaultReplyTo: 'itsmanoharkumar@gmail.com',
      },
    },
  },
})
