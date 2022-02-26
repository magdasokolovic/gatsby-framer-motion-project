const path = require('path');
const pageData = require('./src/data.json')

exports.createPages = ({actions}) => {
    const {createPage} = actions
    
    pageData.forEach((data) => {
        const pagePath = `/${data.slug}`;

        createPage({
          path: pagePath,
          component: path.resolve(`./src/components/Model/index.tsx`),
          context: data,
        });
    })
    
}