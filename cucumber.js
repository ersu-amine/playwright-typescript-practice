module.exports = {

    default: {

        require: [
            'tests/steps/**/*.ts',
            'tests/support/**/*.ts',
            'tests/hooks/**/*.ts'
        ],

        requireModule: ['ts-node/register'],

        paths: ['tests/features/**/*.feature'],

        publishQuiet: true,

        format: ['progress', 'html:cucumber-report.html']

    }

};

//module.exports = {
//     default: [
//         '--require-module', 'ts-node/register',
//         '--require', 'tests/support/world.ts',
//         '--require', 'tests/hooks/hooks.ts',
//         '--require', 'tests/steps/**/*.ts',
//         '--format', 'progress',
//         'tests/features/**/*.feature'
//     ]
// };
