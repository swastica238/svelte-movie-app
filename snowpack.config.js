const production = process.env.NODE_ENV === 'production'

function babelOptions(){
    return {
        plugins: production 
                    ? ['transform-remove-console'] 
                    : []
    }
}

module.exports = {
    mount: {
        public: '/',
        src: '/_dist_'
    }, 
    plugins: [
        '@snowpack/plugin-svelte', 
        ['@snowpack/plugin-babel', {
            tansformOptions: babelOptions()
        }],
        '@snowpack/plugin-dotenv',
        '@snowpack/plugin-optimize'
    ],
    alias: {
        '~': './src'
    }
}