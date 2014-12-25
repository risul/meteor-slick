Package.describe({
    name: 'risul:slick',
    summary: "Slick - the last carousel you'll ever need",
    version: "1.0.1",
    git: "https://github.com/risul/meteor-slick"
});

Package.on_use(function (api) {
    api.versionsFrom("METEOR@0.9.0");
    api.use('jquery', 'client');

    api.addFiles([
        "lib/images/ajax-loader.gif",
        "lib/fonts/slick.eot",
        "lib/fonts/slick.svg",
        "lib/fonts/slick.ttf",
        "lib/fonts/slick.woff"
    ], "client", { isAsset: true });

    api.addFiles([
        "lib/slick.css",
        "lib/slick.js"
    ], "client");

});