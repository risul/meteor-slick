Package.describe({
    name: 'risul:slick',
    summary: "Slick - the last carousel you'll ever need",
    version: "1.5.0_5",
    git: "https://github.com/risul/meteor-slick"
});

Package.on_use(function (api) {
    api.versionsFrom("METEOR@1.0");
    api.use('jquery', 'client');

    api.addFiles([
        "lib/images/ajax-loader.gif",
        "lib/fonts/slick.eot",
        "lib/fonts/slick.svg",
        "lib/fonts/slick.ttf",
        "lib/fonts/slick.woff"
    ], "client", { isAsset: true });

    api.addFiles([
        "lib/css/slick.css",
        "lib/css/overrides.css",
        "lib/slick.js"
    ], "client");

});