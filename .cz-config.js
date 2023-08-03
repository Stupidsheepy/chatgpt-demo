const importCzConfig = require("import-dynamic").import;

async function main() {
    const czConfig = await importCzConfig("./.cz-config.cjs");

    // 使用 czConfig
    console.log(czConfig.types);
}

main();
