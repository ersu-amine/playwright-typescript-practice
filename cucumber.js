module.exports = {
    default: {
        requireModule: ["ts-node/register"],
        paths: ["tests/features/*.feature"],
        require: ["tests/steps/*.ts", "tests/hooks/*.ts"],
        format: ["progress-bar", "html:cucumber-report.html"],
    },
};
