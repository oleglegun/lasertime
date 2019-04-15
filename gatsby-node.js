const path = require('path')

const articleTemplatePath = `src/templates/article.js`

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    // Create node field `group` for each MD file
    // which will be used for filtering in GraphQL Queries
    if (node.internal.type === `MarkdownRemark`) {
        const fileNode = getNode(node.parent)
        createNodeField({
            node,
            name: 'group',
            value: fileNode.sourceInstanceName,
        })

        // Add order field
        // if (node.frontmatter.order !== undefined) {
        //     createNodeField({node, name: "order", value: node.frontmatter.order})
        // }
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        const articleTemplate = path.resolve(articleTemplatePath)
        resolve(
            // Query for all frontmatter url paths
            graphql(
                `
                    {
                        allMarkdownRemark(limit: 1000) {
                            edges {
                                node {
                                    frontmatter {
                                        path
                                    }
                                }
                            }
                        }
                    }
                `
            ).then(result => {
                if (result.errors) {
                    console.log('---', result.errors)
                    reject(result.errors)
                }

                // Create article posts
                result.data.allMarkdownRemark.edges.forEach(edge => {
                    createPage({
                        path: edge.node.frontmatter.path,
                        component: articleTemplate,
                        // Pass context for querying for HTML from the template
                        context: {
                            pagePath: edge.node.frontmatter.path,
                        },
                    })
                })
                return
            })
        )
    })
}
