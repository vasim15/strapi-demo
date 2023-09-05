module.exports = ({ env }) => ({
    "netlify-deployments": {
      enabled: true,
      config: {
        accessToken: process.env.NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN,
        sites: [
            {
              name: 'peaceful-sopapillas-dea225',
              id: "1e9e7e16-76ad-4845-87a0-727f3681da69",
              buildHook: "https://api.netlify.com/build_hooks/64f6ee6df7fa1075d739452d",
              branch: 'main' // optional
            }
          ]
      },
    },
  });
