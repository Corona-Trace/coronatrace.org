const Airtable = require('airtable')

module.exports = function(api, opts) {
  const base = new Airtable({ apiKey: opts.apiKey }).base(opts.base)

  api.loadSource(async store => {
    const contentType = store.addCollection({
      typeName: 'Core'
    })

    await base('Core')
      .select()
      .eachPage((records, fetchNextPage) => {
        records.forEach(record => {
          const item = record._rawJson

          contentType.addNode({
            id: item.id,
            order: item.fields.Order,
            name: item.fields.Name,
            fields: item.fields
          })
        })
        fetchNextPage()
      })
  })

  api.loadSource(async store => {
    const contentType = store.addCollection({
      typeName: 'Corporate'
    })

    await base('Corporate')
      .select()
      .eachPage((records, fetchNextPage) => {
        records.forEach(record => {
          const item = record._rawJson

          contentType.addNode({
            id: item.id,
            order: item.fields.Order,
            name: item.fields.Name,
            fields: item.fields
          })
        })
        fetchNextPage()
      })
  })

  api.loadSource(async store => {
    const contentType = store.addCollection({
      typeName: 'Individual'
    })

    await base('Individual')
      .select()
      .eachPage((records, fetchNextPage) => {
        records.forEach(record => {
          const item = record._rawJson

          contentType.addNode({
            id: item.id,
            order: item.fields.Order,
            name: item.fields.Name,
            fields: item.fields
          })
        })
        fetchNextPage()
      })
  })
}
