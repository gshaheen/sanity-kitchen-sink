export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2b1a030e9a613382777514',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-q83vfbda',
                  apiId: 'ceb918b0-41dd-44d2-a70b-a4846fc0d1b6'
                },
                {
                  buildHookId: '5f2b1a0399a4f4fd605e4866',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3jvn6ke3',
                  apiId: '2bc84e6c-410a-49db-a32f-9fec1d4e39fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gshaheen/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3jvn6ke3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
